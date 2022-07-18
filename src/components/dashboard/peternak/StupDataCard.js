import React, { Component, Fragment } from "react";
import { Tr, Th, Td } from "@chakra-ui/react";

const StupDataCard = (props) => {
  const { stup } = props;

  return (
    <Fragment>
      <Tr key={stup.id}>
        <Td>{stup.fk_stup.no_stup}</Td>
        <Td>{stup.fk_peternakan.kode_peternakan}</Td>
        <Td>{stup.fk_stup.status}</Td>
      </Tr>
    </Fragment>
  );
};

export default StupDataCard;
