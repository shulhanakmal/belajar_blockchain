import React, { Component, Fragment } from "react";
import { Tr, Th, Td, Button } from "@chakra-ui/react";

const PeternakanDataCard = (props) => {
  const { peternakan, lihatData } = props;

  return (
    <Fragment>
      <Tr key={peternakan.id}>
        <Td>{peternakan.fk_peternakan.kode_peternakan}</Td>
        <Td>{peternakan.fk_peternak.nama}</Td>
        <Td>{peternakan.fk_peternakan.provinsi}</Td>
        <Td>{peternakan.fk_peternakan.kota}</Td>
        <Td>
          <Button
            colorScheme="orange"
            size="sm"
            bg="orange.400"
            color="white"
            onClick={(event) => lihatData(event, peternakan.id)}
            _hover={{
              bg: "orange.500",
            }}
            isFullWidth
          >
            Lihat Data
          </Button>
        </Td>
      </Tr>
    </Fragment>
  );
};

export default PeternakanDataCard;
