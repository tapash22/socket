import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import image from '../assets/logo192.png';

const WhatsChat = () => {
    return (
        <WhatsAppWidget
            phoneNo="8801674345763"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="40"
            iconColor="white"
            iconBgColor="indigo"
            headerIcon={image}
            headerIconColor="pink"
            headerTxtColor="black"
            headerBgColor="tomato"
            headerTitle="John Doe"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<>Hi, <br /> How can I help you?</>}
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="indigo"
            btnTxt="Start Chat"
            btnTxtColor="white"
        />
    );
};

export default WhatsChat;