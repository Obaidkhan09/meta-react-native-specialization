import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

function Feedback() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ScrollView style={style.container} keyboardDismissMode="on-drag">
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "position"}
      >
        <Text style={style.heading}>
          How was your experience at
          <Text style={[style.heading, style.headingBold]}>
            {"\n"} Little Lemon
          </Text>
        </Text>
        <Text style={style.paragraph}>
          Indulge in a culinary journey at our restaurant, where passion for
          food is paired with impeccable service. Experience exquisite flavors,
          warm hospitality, and an inviting atmosphere that will leave you
          longing for more.
        </Text>
        <TextInput
          keyboard
          style={style.input}
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          style={style.input}
          placeholder="Enter Your Name"
          value={name}
          onChange={setName}
        ></TextInput>
        <TextInput
          style={[style.input, style.description]}
          placeholder="Type Your Feedback"
          value={description}
          onChange={setDescription}
          multiline={true}
        ></TextInput>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default Feedback;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  heading: {
    paddingTop: 10,
    paddingBottom: 15,
    fontSize: 22,
    flexWrap: "wrap",
    color: "white",
    textAlign: "center",
  },
  headingBold: {
    fontWeight: 600,
  },
  paragraph: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    textAlign: "left",
    color: "white",
  },
  input: {
    backgroundColor: "#F4CE14",
    height: 50,
    width: "85%",
    alignSelf: "center",
    marginTop: 35,
    textAlign: "center",
    borderRadius: 50,
    flexWrap: "wrap",
    fontSize: 18
  },
  description: {
    height: 100,
    borderRadius: 15,
  },
});
