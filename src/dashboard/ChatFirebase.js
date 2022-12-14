import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';

const ChatFirebase = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <GiftedChat
      style={{backgroundColor: 'white'}}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: 'deeppink',
              },
            }}
          />
        );
      }}
    />
  );
};

export default ChatFirebase;

const styles = StyleSheet.create({});
