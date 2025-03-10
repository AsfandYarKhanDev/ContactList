import { FlatList, StyleSheet, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { ListItem } from "./ListItem";

const contacts = [
  {
    uid: 1,
    name: "Asfandyar",
    status: "Just a brilliant person",
    imageUrl:
      "https://gravatar.com/avatar/da093a1cc9002728912dc21686c41751?s=400&d=robohash&r=x",
  },
  {
    uid: 2,
    name: "Sarah",
    status: "Lover of adventure and exploring",
    imageUrl:
      "https://gravatar.com/avatar/29a58d8b7d8b3db7d1b76ecb18237a39?s=400&d=robohash&r=x",
  },
  {
    uid: 3,
    name: "John",
    status: "Avid gamer and tech enthusiast",
    imageUrl:
      "https://gravatar.com/avatar/0a12e36f9ad49fd52e1b7fdf9f0e06f5?s=400&d=robohash&r=x",
  },
  {
    uid: 4,
    name: "Emily",
    status: "Passionate about cooking and food",
    imageUrl:
      "https://gravatar.com/avatar/ae47c672ce2d4de92fc2bce272c242a7?s=400&d=robohash&r=x",
  },
  {
    uid: 5,
    name: "Michael",
    status: "Music lover and aspiring guitarist",
    imageUrl:
      "https://gravatar.com/avatar/7f8ebdb9d35a41368e539c9d15d75d77?s=400&d=robohash&r=x",
  },
  {
    uid: 6,
    name: "Anna",
    status: "Photographer and nature enthusiast",
    imageUrl:
      "https://gravatar.com/avatar/c283d0fa4823a4e4e927109c0005b8cc?s=400&d=robohash&r=x",
  },
  {
    uid: 7,
    name: "David",
    status: "Tech wizard and entrepreneur",
    imageUrl:
      "https://gravatar.com/avatar/3f4b6a8c033b443a8185ab64b67bffea?s=400&d=robohash&r=x",
  },
  {
    uid: 8,
    name: "Jessica",
    status: "Fitness fanatic and wellness advocate",
    imageUrl:
      "https://gravatar.com/avatar/f37092623456f9fdad319f2314a0f830?s=400&d=robohash&r=x",
  },
  {
    uid: 9,
    name: "Daniel",
    status: "Books lover and philosophical debates",
    imageUrl:
      "https://gravatar.com/avatar/88e9c7a6d9db2b58ea8132f0f44a6d6a?s=400&d=robohash&r=x",
  },
  {
    uid: 10,
    name: "Olivia",
    status: "Digital artist and graphic designer",
    imageUrl:
      "https://gravatar.com/avatar/59c1b85be3035432c95de3c56a7edbba?s=400&d=robohash&r=x",
  },
  {
    uid: 11,
    name: "Sophia",
    status: "Loves painting and abstract art",
    imageUrl:
      "https://gravatar.com/avatar/a7b1a8e3c6e2f870129da1c7742f4e41?s=400&d=robohash&r=x",
  },
  {
    uid: 12,
    name: "Ethan",
    status: "Tech geek and AI enthusiast",
    imageUrl:
      "https://gravatar.com/avatar/12bd5a743b6a4637819d97e512a1dc94?s=400&d=robohash&r=x",
  },
  {
    uid: 13,
    name: "Charlotte",
    status: "Travel junkie and adventure lover",
    imageUrl:
      "https://gravatar.com/avatar/d3816f5a2e5f4382b3f5a3d3f74f2c3b?s=400&d=robohash&r=x",
  },
  {
    uid: 14,
    name: "Liam",
    status: "Movie buff and story enthusiast",
    imageUrl:
      "https://gravatar.com/avatar/b3e271afba2f47819dffcebbdb43f3bb?s=400&d=robohash&r=x",
  },
  {
    uid: 15,
    name: "Mia",
    status: "Avid reader and fantasy fiction fan",
    imageUrl:
      "https://gravatar.com/avatar/5f4c6b674bc04e21b5cfc4b6a2fcbeb1?s=400&d=robohash&r=x",
  },
  {
    uid: 16,
    name: "Noah",
    status: "Loves sports and fitness training",
    imageUrl:
      "https://gravatar.com/avatar/74e75f9b12574667b6a4e432f8b3df47?s=400&d=robohash&r=x",
  },
  {
    uid: 17,
    name: "Amelia",
    status: "Yoga practitioner and health advocate",
    imageUrl:
      "https://gravatar.com/avatar/2a5f7b92788d48b2b9ad21c8a1b9c88b?s=400&d=robohash&r=x",
  },
  {
    uid: 18,
    name: "Elijah",
    status: "Code lover and open-source contributor",
    imageUrl:
      "https://gravatar.com/avatar/1cfe97b7cbd14504b1e3ad1cb1c749fb?s=400&d=robohash&r=x",
  },
  {
    uid: 19,
    name: "Grace",
    status: "Fashion designer and stylist",
    imageUrl:
      "https://gravatar.com/avatar/2f31e5a4671345d9be9237c4a6b64c5b?s=400&d=robohash&r=x",
  },
  {
    uid: 20,
    name: "James",
    status: "Finance and stock market enthusiast",
    imageUrl:
      "https://gravatar.com/avatar/7e12f3a4d7b146bfa1c9a1a72e2f4c71?s=400&d=robohash&r=x",
  },
  {
    uid: 21,
    name: "Ava",
    status: "Loves gardening and botany",
    imageUrl:
      "https://gravatar.com/avatar/bf23976c36b841509d16f7b824fc7f88?s=400&d=robohash&r=x",
  },
  {
    uid: 22,
    name: "Benjamin",
    status: "Historian and documentary lover",
    imageUrl:
      "https://gravatar.com/avatar/da1f9c654aa44623b7f2f42a1e3f7b72?s=400&d=robohash&r=x",
  },
  {
    uid: 23,
    name: "Chloe",
    status: "Animal lover and pet caretaker",
    imageUrl:
      "https://gravatar.com/avatar/4c37e4a1a4f7476e8b1c9a76b2bffdb7?s=400&d=robohash&r=x",
  },
  {
    uid: 24,
    name: "Henry",
    status: "Tech startup founder and innovator",
    imageUrl:
      "https://gravatar.com/avatar/8e4f3a1b7457418bb3b7b1c8c2b7f4a2?s=400&d=robohash&r=x",
  },
  {
    uid: 25,
    name: "Zoe",
    status: "Aspiring filmmaker and scriptwriter",
    imageUrl:
      "https://gravatar.com/avatar/a2b3c4d5e6f74819b3a2b7c9c2d8f9e1?s=400&d=robohash&r=x",
  },
];

export default function App() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.uid.toString()}
        contentContainerStyle={{ paddingTop: 40 }}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
