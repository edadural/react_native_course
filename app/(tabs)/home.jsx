import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await getAllPosts();
        setData(res);
      } catch (error) {
        Alert.alert("Error", error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text className="text-2xl text-white">{item.id}</Text>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-gray-100">
                    Welcome Back
                  </Text>
                  <Text className="text-2xl font-psemibold text-white">
                    JSMastery
                  </Text>
                </View>

                <View className="mt-1.5">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>

              <SearchInput />

              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-lg font-pregular text-gray-100 mb-3">
                  Latest Videos
                </Text>

                <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyState
              title="No videos found"
              subtitle="Be the first one to upload a video"
            />
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
