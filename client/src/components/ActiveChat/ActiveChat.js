import React, {useMemo} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Input, Header, Messages } from "./index";
import moment from "moment";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexGrow: 8,
        flexDirection: "column",
    },
    chatContainer: {
        marginLeft: 41,
        marginRight: 41,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between",
    },
}));

const ActiveChat = ({
    user,
    conversations,
    activeConversation,
    postMessage,
}) => {
    const classes = useStyles();

    const conversation = useMemo(() => conversations
        ? conversations.find(
              (conversation) =>
                  conversation.otherUser.username === activeConversation
          )
        : {}, [activeConversation, conversations]);

    const isConversation = (obj) => {
        return obj !== {} && obj !== undefined;
    };

    const sortedMessages = useMemo(() => (
        conversation &&
        conversation.messages.sort((prevMessage, currMessage) => {
            return (
                moment(prevMessage.createdAt).valueOf() -
                moment(currMessage.createdAt).valueOf()
            );
        })

    ), [conversation])

    return (
        <Box className={classes.root}>
            {isConversation(conversation) && conversation.otherUser && (
                <>
                    <Header
                        username={conversation.otherUser.username}
                        online={conversation.otherUser.online || false}
                    />
                    <Box className={classes.chatContainer}>
                        {user && (
                            <>
                                <Messages
                                    messages={sortedMessages}
                                    otherUser={conversation.otherUser}
                                    userId={user.id}
                                />
                                <Input
                                    otherUser={conversation.otherUser}
                                    conversationId={conversation.id || null}
                                    user={user}
                                    postMessage={postMessage}
                                />
                            </>
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ActiveChat;
