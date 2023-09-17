import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from "react";
import SectionListContacts from "react-native-sectionlist-contacts";

const Contacts = () => {
  const [dataArray, setDataArray] = useState([
    {
      name: "Denys",
      firstname: "Lily",
      lastname: "Denys",
    },
    {
      name: "Hmeleckiy",
      firstname: "Luka",
      lastname: "Hmeleckiy",
    },
    {
      name: "Denys",
      firstname: "Lily",
      lastname: "Denys",
    },
    {
      name: "Knight",
      firstname: "Sonia",
      lastname: "Knight",
    },
    {
      name: "Santos",
      firstname: "Carolina",
      lastname: "Santos",
    },
    {
      name: "Colón",
      firstname: "Clemente",
      lastname: "Colón",
    },
    {
      name: "Knight",
      firstname: "Emilie",
      lastname: "Knight",
    },
    {
      name: "Charneckiy",
      firstname: "Milodara",
      lastname: "Charneckiy",
    },
    {
      name: "Bu",
      firstname: "Sigrun",
      lastname: "Bu",
    },
    {
      name: "Nunes",
      firstname: "Felicíssimo",
      lastname: "Nunes",
    },
    {
      name: "Harcourt",
      firstname: "Sarah",
      lastname: "Harcourt",
    },
    {
      name: "Stojković",
      firstname: "Dušan",
      lastname: "Stojković",
    },
    {
      name: "Bosters",
      firstname: "Mariëlle",
      lastname: "Bosters",
    },
    {
      name: "Träger",
      firstname: "Ayten",
      lastname: "Träger",
    },
    {
      name: "Castillo",
      firstname: "Mabel",
      lastname: "Castillo",
    },
    {
      name: "Tipparti",
      firstname: "Nandita",
      lastname: "Tipparti",
    },

    {
      name: "Garnier",
      firstname: "Andrée",
      lastname: "Garnier",
    },

    {
      name: "Ruppert",
      firstname: "Ilias",
      lastname: "Ruppert",
    },

    {
      name: "Perala",
      firstname: "Ronja",
      lastname: "Perala",
    },

    {
      name: "Davies",
      firstname: "Theodore",
      lastname: "Davies",
    },
  ]);
  // let nameData = [
  //   {
  //     name: "Denys",
  //     firstname: "Lily",
  //     lastname: "Denys",
  //   },
  //   {
  //     name: "Hmeleckiy",
  //     firstname: "Luka",
  //     lastname: "Hmeleckiy",
  //   },
  //   {
  //     name: "Denys",
  //     firstname: "Lily",
  //     lastname: "Denys",
  //   },
  //   {
  //     name: "Knight",
  //     firstname: "Sonia",
  //     lastname: "Knight",
  //   },
  //   {
  //     name: "Santos",
  //     firstname: "Carolina",
  //     lastname: "Santos",
  //   },
  //   {
  //     name: "Colón",
  //     firstname: "Clemente",
  //     lastname: "Colón",
  //   },
  //   {
  //     name: "Knight",
  //     firstname: "Emilie",
  //     lastname: "Knight",
  //   },
  //   {
  //     name: "Charneckiy",
  //     firstname: "Milodara",
  //     lastname: "Charneckiy",
  //   },
  //   {
  //     name: "Bu",
  //     firstname: "Sigrun",
  //     lastname: "Bu",
  //   },
  //   {
  //     name: "Nunes",
  //     firstname: "Felicíssimo",
  //     lastname: "Nunes",
  //   },
  //   {
  //     name: "Harcourt",
  //     firstname: "Sarah",
  //     lastname: "Harcourt",
  //   },
  //   {
  //     name: "Stojković",
  //     firstname: "Dušan",
  //     lastname: "Stojković",
  //   },
  //   {
  //     name: "Bosters",
  //     firstname: "Mariëlle",
  //     lastname: "Bosters",
  //   },
  //   {
  //     name: "Träger",
  //     firstname: "Ayten",
  //     lastname: "Träger",
  //   },
  //   {
  //     name: "Castillo",
  //     firstname: "Mabel",
  //     lastname: "Castillo",
  //   },
  //   {
  //     name: "Tipparti",
  //     firstname: "Nandita",
  //     lastname: "Tipparti",
  //   },

  //   {
  //     name: "Garnier",
  //     firstname: "Andrée",
  //     lastname: "Garnier",
  //   },

  //   {
  //     name: "Ruppert",
  //     firstname: "Ilias",
  //     lastname: "Ruppert",
  //   },

  //   {
  //     name: "Perala",
  //     firstname: "Ronja",
  //     lastname: "Perala",
  //   },

  //   {
  //     name: "Davies",
  //     firstname: "Theodore",
  //     lastname: "Davies",
  //   },

  // ];

  const _renderHeader = (params) => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{params.key}</Text>
      </View>
    );
  };

  const _renderItem = (item, index, section) => {
    return (
      <View style={styles.itemView}>
        <View style={styles.itemTextView}>
          <Text style={styles.itemFirstName}>{item.firstname}</Text>
          <Text style={styles.itemLastName}>{item.lastname}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 200, backgroundColor: "#161616" }}>
        <View style={styles.headerView}>
          <Text style={styles.groupsText}>Groups</Text>
          <Image style={{ width: 24, height: 24 }} source={require("../../assets/images/dark/Add_Icon.png")} />
        </View>
        <View style={styles.headerContactsView}>
          <Text style={styles.headerContacts}>Contacts</Text>
        </View>
        <View style={styles.searchBox}>
          <Image style={{ marginLeft: 7, marginRight: 7, width: 16, height: 16 }} source={require("../../assets/images/dark/Search_Icon.png")} />
          <TextInput placeholder="Search" placeholderTextColor="#8e8e93" style={styles.inputText} returnKeyType="search" keyboardAppearance="dark" onChangeText={(text) => {}}></TextInput>
        </View>
      </View>
      <View style={{ height: 80, backgroundColor: "#000000", flexDirection: "row" }}>
        <Image style={styles.avatar} source={require("../../assets/images/dark/Users/27.jpg")} />
        <View
          style={{
            marginLeft: 15,
            // marginTop: -15,
            alignItems: "flex-start",
            justifyContent: "center",
            borderWidth: 0,
            borderColor: "#ffffff",
          }}
        >
          <Text style={styles.accountText}>Lily Denys</Text>
          <Text style={styles.introText}>My Card</Text>
        </View>
      </View>
      <View style={styles.container}>
        <SectionListContacts ref={(s) => (sectionList = s)} sectionListData={dataArray} initialNumToRender={dataArray.length} otherAlphabet="#" renderHeader={_renderHeader} renderItem={_renderItem} letterViewStyle={styles.letterView} letterTextStyle={styles.letterText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#000000",
  },
  headerView: {
    height: 44,
    marginTop: 44,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupsText: {
    fontFamily: "SFProText-Regular",
    fontSize: 17,
    color: "#0a84ff",
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  headerContactsView: {
    height: 41,
    marginTop: 12,
    marginLeft: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  headerContacts: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: 34,
    color: "#ffffff",
    letterSpacing: -0.41,
    lineHeight: 41,
  },
  searchBox: {
    marginTop: 12,
    height: 37,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
    backgroundColor: "#2c2c2e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputText: {
    fontFamily: "SFProText-Regular",
    fontSize: 17,
    color: "#8e8e93",
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  avatar: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
    // marginRight: 16,
    borderRadius: 48,
  },
  accountText: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: 20,
    color: "#ffffff",
    letterSpacing: 0.38,
    lineHeight: 18,
  },
  introText: {
    fontFamily: "SFProText-Regular",
    fontSize: 13,
    color: "#ffffff",
    letterSpacing: 0.38,
    lineHeight: 18,
  },
  sectionView: {
    height: 28,
    backgroundColor: "#2c2c2e",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sectionText: {
    marginLeft: 16,
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 17,
    color: "#ffffff",
  },
  itemView: {
    height: 44,
    backgroundColor: "rgba(22,22,22,0.75)",
  },
  itemTextView: {
    height: 44,
    marginLeft: 16,
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
  },
  itemFirstName: {
    fontFamily: "SFProText-Regular",
    fontSize: 17,
    color: "#ffffff",
  },
  itemLastName: {
    marginLeft: 5,
    fontFamily: "SFProText-Regular",
    fontSize: 17,
    color: "#ffffff",
  },
  letterText: {
    fontFamily: "SFProText-Regular",
    fontSize: 11,
    color: "#007aff",
  },
});

export default Contacts;
