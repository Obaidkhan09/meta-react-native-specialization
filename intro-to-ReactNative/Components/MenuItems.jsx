import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const RenderList = ({ name }) => <Text style={style.menuText}>{name}</Text>;
const Seperator = () => <View style={style.seperator} />;
const Header = () => <Text style={style.headintText}>View Menu</Text>;
const Footer = () => (
  <Text style={style.footer}>All right reserve by Little Lemon 2023</Text>
);
function MenuItems({navigation}) {
  const menuItemsToDisplay = [
    { name: "Spaghetti Bolognese", id: "dish001" },
    { name: "Chicken Parmesan", id: "dish002" },
    { name: "Caesar Salad", id: "dish003" },
    { name: "Beef Stir-Fry", id: "dish004" },
    { name: "Mushroom Risotto", id: "dish005" },
    { name: "Burger", id: "dish006" },
    { name: "Salad", id: "dish007" },
    { name: "Biryani", id: "dish008" },
    { name: "Alu", id: "dish009" },
    { name: "Kabab", id: "dish010" },
    { name: "Karahi", id: "dish011" },
    { name: "Alu Qeema", id: "dish012" },
    { name: "Pasta", id: "dish013" },
    { name: "Pizza", id: "dish014" },
    { name: "Pepsi", id: "dish015" },
    { name: "Chicken Tikka", id: "dish016" },
    { name: "Rice & Soup", id: "dish017" },
    { name: "Beanut Butter", id: "dish018" },
    { name: "Sweet Kheer", id: "dish019" },
    { name: "Fish and Chips", id: "dish020" },
  ];
  const menuItemsToDisplaySections = [
    {
      title: "Special",
      data: [
        "Spaghetti Bolognese",
        "Chicken Parmesan",
        "Caesar Salad",
        "Beef Stir-Fry",
        "Mushroom Risotto",
      ],
    },
    {
      title: "Starters",
      data: ["Fish and Chips", "Rice & Soup", "Salad", "Mushroom Risotto"],
    },
    {
      title: "Deals",
      data: [
        "Kabab",
        "Beanut Butter",
        "Pizza",
        "Alu Qeema",
        "Spaghetti Bolognese",
        "Chicken Parmesan",
      ],
    },
    {
      title: "Sweet",
      data: [
        "Caesar Salad",
        "Beef Stir-Fry",
        "Mushroom Risotto",
        "Fish and Chips",
        "Rice & Soup",
        "Salad",
        "Mushroom Risotto",
      ],
    },
  ];
  const listItems = ({ item }) => <RenderList name={item.name} />;
  const SectionListRender = ({ item }) => <RenderList name={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={style.sectionListHeader}>{title}</Text>
  );
  const [active, setActive] = useState(true);
  return (
    <View style={style.container}>
      <View style={style.buttonView}>
        <Pressable onPress={() => setActive(!active)}>
          <Text style={style.button}>
            {active ? "Section Menu" : "Complete Menu"}
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Feedback")}>
          <Text style={style.button}>
            {"Feedback"}
          </Text>
        </Pressable>
      </View>
      {active ? (
        <FlatList
          ListHeaderComponent={Header}
          indicatorStyle="black"
          data={menuItemsToDisplay}
          renderItem={listItems}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Seperator}
          ListFooterComponent={Footer}
        />
      ) : (
        <SectionList
          sections={menuItemsToDisplaySections}
          renderItem={SectionListRender}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Seperator}
          ListFooterComponent={Footer}
        />
      )}
    </View>
  );
}

export default MenuItems;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  innerContainer: {
    padding: 20,
  },
  headintText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: "white",
    textAlign: "center",
  },
  menuText: {
    fontSize: 20,
    flexWrap: "wrap",
    color: "white",
    padding: 20,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: "#F0FFF0",
  },
  footer: {
    fontSize: 20,
    flexWrap: "wrap",
    backgroundColor: "#F4CE14",
    textAlign: "center",
  },
  sectionListHeader: {
    padding: 15,
    backgroundColor: "#fff9c4",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
  },
  button : {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    padding : 10,
    fontSize: 15,
    fontWeight: 500,
  },
  buttonView : {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
