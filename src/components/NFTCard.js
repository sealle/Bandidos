import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./NFTCard.css";

const NFTCard = ({ nft }) => {
  return (
    <div className="card nft-card">
      <Card>
        <Card.Header>{nft.meta.name}</Card.Header>
        <Image src={nft.meta.content[1].url} wrapped ui={false} />
        <Card.Content>
          <Card.Meta>{nft.collection}</Card.Meta>
          <Card.Meta>Contract Address:</Card.Meta>
          <Card.Meta>{nft.contract}</Card.Meta>
          <Card.Description>Collection Description:</Card.Description>
          <Card.Description>{nft.meta.description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default NFTCard;
