// file ini disalin dari file peternakdatacard
// function untuk menampilkan data yang diambil dari supabase pada tabel penjualan.
// function ini digunakan di file penjualan2.
// kolom yang ditampilkan dapat disesuaikan di sini, walaupun nama tabelnya harus disesuaikan di
//   file penjualannya
//
//  kalau filepeternakandatacard ada tombol aksi, gunanya untuk menampilkan data yang berkaitan dengan data peternakan, ketika tombol "lihat data" pada tabel peternakan ditekan.

import React, { Component, Fragment } from "react";
import { Tr, Th, Td } from "@chakra-ui/react";

// class PeternakDataCard extends Component {
class TraceabilityDataCard extends Component {
  render() {
    const {
      id = null,
      // kode_peternak = null,
      // nama = null,
      // no_hp = null,
      // email = null,
      // username = null,
      no_kemas,
      volume_hasil_kemas_botol,
      area_distribusi,
      tgl_selesai_prod,
      tgl_kadaluarsa,
      no_kantung_panen,
      no_halal,
      no_bpom,
    // } = this.props.peternak || {};
     } = this.props.pengemasan || {};

    return (
      <Fragment>
        <Tr key={id}>
          {/*<Td>{kode_peternak}</Td>
          <Td>{nama}</Td>
          <Td>{no_hp}</Td>
          <Td>{email}</Td>
          <Td>{username}</Td>*/}
          <Td>{no_kemas}</Td>
          <Td>{volume_hasil_kemas_botol}</Td>
          <Td>{area_distribusi}</Td>
          <Td>{tgl_selesai_prod}</Td>
          <Td>{tgl_kadaluarsa}</Td>
          <Td>{no_kantung_panen}</Td>
          <Td>{no_halal}</Td>
          <Td>{no_bpom}</Td>
        </Tr>
      </Fragment>
    );
  }
}

// export default PeternakDataCard;
export default TraceabilityDataCard;