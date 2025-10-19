import {Router} from "express";
import { NotificationFactory } from "../patterns/Factory-method/NotificationFactory.js";



const router = Router();

router.get('/' , (req , res) => {

    const email = NotificationFactory.createNotification("email");
    email.send("Sending Email: New article published!");

    const sms = NotificationFactory.createNotification("sms");
    sms.send("Sending SMS: Check out our latest blog post!");

    const push = NotificationFactory.createNotification("push");
    push.send("Sending Push Notification: A new video is available now!");

    res.send("Smart CMS API is running with Factory Pattern!");
});

// Test route for notifications
router.get('/notify/:type' , (req , res) => {
    try{
        console.log(123);
        const notification = NotificationFactory.createNotification(req.params.type);
        notification.send(`Test message via ${req.params.type} notification`); 
    } catch(error){
        res.status(400).send("Invalid notification type");
    }
});

export default router;