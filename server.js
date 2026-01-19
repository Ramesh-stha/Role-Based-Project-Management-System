import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import next from "next";

const port = 3000;
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  const httpServer = createServer(app);

  const io = new Server(httpServer, {
    cors: {
      origin: "*", // change to your frontend domain in production
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);

    socket.emit("connected");


    //comment on server
   // socket.on("addComment", (data)=>{
     //   console.log("comment received", data)
       // io.emit("addComment", data)
   // })


   

 

  });

  /**
   * ⚠️ IMPORTANT FIX (New Next.js)
   * Use `app.use()` instead of `app.all("*")`
   */
  app.use((req, res) => {
    handle(req, res);
  });

  httpServer.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
});
