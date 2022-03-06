import React from "react";
import {
  SuggestionsContainer,
  SuggestionsBg,
  SuggestionsContent,
  SuggestionsH1,
  SuggestionsP,
  SuggestionsCommentContainer,
} from "./Suggestions";
import { Form, TextArea } from 'semantic-ui-react'

function Suggestions() {
  return (
    <SuggestionsContainer id="suggestions">
      <SuggestionsBg>
      </SuggestionsBg>
      <SuggestionsContent>
        <SuggestionsCommentContainer>
        <SuggestionsH1>Suggestions</SuggestionsH1>
        <SuggestionsP>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </SuggestionsP>
        <Form style={{width:"100%"}}>
          <TextArea style={{ minHeight: 200}}/>
        </Form>
        </SuggestionsCommentContainer>
      </SuggestionsContent>
    </SuggestionsContainer>
  );
}

export default Suggestions;
