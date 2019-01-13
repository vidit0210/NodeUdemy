const eventHandle = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><titlle>Assignment</titlle></head>");
    res.write(
      "<body><form action ='/create-user' method='POST'><input type='text' name ='username'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><titlle>Challenge</titlle></head>");
    res.write("<body><ul><li>vidit0210</li><li>dev0210</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      res.end();
    });
  }
};
module.exports = eventHandle;
