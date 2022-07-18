import React, { Component, Fragment } from "react";
import { Tr, Th, Td } from "@chakra-ui/react";

class PeternakDataCard extends Component {
  render() {
    const {
      id = null,
      kode_peternak = null,
      nama = null,
      no_hp = null,
      email = null,
      username = null,
    } = this.props.peternak || {};

    return (
      <Fragment>
        <Tr key={id}>
          <Td>{kode_peternak}</Td>
          <Td>{nama}</Td>
          <Td>{no_hp}</Td>
          <Td>{email}</Td>
          <Td>{username}</Td>
        </Tr>
      </Fragment>
    );
  }
}

export default PeternakDataCard;
