const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><titlle>Form</titlle></head>");
    res.write(
      '<body><form action ="/message" method="POST"><input type ="text" name ="message"><button type ="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end(); // if return is not given it goes out of the sever
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><titlle>Sending page</titlle></head>");
  res.write("<body>Here is your Data</body>");
  res.write("</html>");
  res.end();
};
module.exports = requestHandler;
