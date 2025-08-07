import React, { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

export default function Exercise2() {
  const [state, setState] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });

  const displayConvo = (name) => {
    setState((prev) => ({ ...prev, displayConversation: name }));
  };

  const goBack = () => {
    setState((prev) => ({ ...prev, displayConversation: null }));
  };

  const currentConvo = state.conversations.find(
    (c) => c.with === state.displayConversation
  );

  return (
    <div>
      {state.displayConversation === null ? (
        <List
          contacts={state.conversations.map((c) => c.with)}
          onSelect={displayConvo}
        />
      ) : (
        <Conversation
          convo={currentConvo.convo}
          sender={currentConvo.with}
          goBack={goBack}
        />
      )}
    </div>
  );
}
