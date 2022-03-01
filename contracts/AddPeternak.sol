// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
pragma experimental ABIEncoderV2;

contract AddPeternak {

    mapping (string => AddFarmer) farmer;
    mapping (string => AddFarmer) private farmerMappingId;
    mapping (string => AddFarmer[]) private farmerMappingNama;
    mapping (string => AddFarmer[]) private farmerMappingKelurahan;

    struct AddFarmer {
        address walletAddress;
        string peternakid;
        string nama;
        string kelurahan;
        Json json;
        string created;
        bool init;
    }

    struct Json {
        string json;
    }

    AddFarmer[] public arr;
    
    function getAllfarmer() public view returns (AddFarmer[] memory) {
        return arr;
    }
    function StoreAddFarmer(string memory peternakid, string memory nama, string memory kelurahan, string memory json, string memory created) public {
        AddFarmer memory _farmer = AddFarmer(msg.sender, peternakid, nama, kelurahan, Json(json), created, true);
        farmerMappingId[_farmer.peternakid] = _farmer;
        farmerMappingNama[nama].push(_farmer);
        farmerMappingKelurahan[kelurahan].push(_farmer);
        arr.push(_farmer);
    }
    function getDataById(string memory peternakid) public view returns (AddFarmer memory)  {
        return (farmerMappingId[peternakid]);
    }

    function getDataByNama(string memory nama) public view returns (AddFarmer[] memory)  {
        return farmerMappingNama[nama];
    }

    function getDataByKelurahan(string memory kelurahan) public view returns (AddFarmer[] memory)  {
        return farmerMappingKelurahan[kelurahan];
    }
}