import { useState } from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import {
  render,
  fireEvent,
  screen,
  within,
} from "@testing-library/react-native";
import { RepositoryListContainer } from "./RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      screen.debug();

      const shownShortNumber = (number) => {
        return number > 1000
          ? Math.round((number / 1000) * 10) / 10 + "k"
          : Number(number).toString();
      };

      within(firstRepositoryItem).getByText(
        repositories.edges[0].node.fullName,
      );
      within(firstRepositoryItem).getByText(
        repositories.edges[0].node.description,
      );
      within(firstRepositoryItem).getByText(
        repositories.edges[0].node.language,
      );
      within(firstRepositoryItem).getByText(
        shownShortNumber(repositories.edges[0].node.stargazersCount),
      );
      within(firstRepositoryItem).getByText(
        shownShortNumber(repositories.edges[0].node.forksCount),
      );

      within(firstRepositoryItem).getByText(
        shownShortNumber(repositories.edges[0].node.reviewCount),
      );
      within(firstRepositoryItem).getByText(
        shownShortNumber(repositories.edges[0].node.ratingAverage),
      );

      within(secondRepositoryItem).getByText(
        repositories.edges[1].node.fullName,
      );
      within(secondRepositoryItem).getByText(
        repositories.edges[1].node.description,
      );
      within(secondRepositoryItem).getByText(
        repositories.edges[1].node.language,
      );
      within(secondRepositoryItem).getByText(
        shownShortNumber(repositories.edges[1].node.stargazersCount),
      );
      within(secondRepositoryItem).getByText(
        shownShortNumber(repositories.edges[1].node.forksCount),
      );

      within(secondRepositoryItem).getByText(
        shownShortNumber(repositories.edges[1].node.reviewCount),
      );
      within(secondRepositoryItem).getByText(
        shownShortNumber(repositories.edges[1].node.ratingAverage),
      );
    });
  });
});