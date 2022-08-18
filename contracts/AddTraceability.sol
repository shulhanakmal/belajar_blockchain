// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
pragma experimental ABIEncoderV2;

contract AddTraceability {

    mapping (string => AddTraceability) traceability;
    mapping (string => AddTraceability) private traceabilityMappingId;

    struct AddTraceability {
        address walletAddress;
        string traceabilityid;
        string nokemas;
        string volumehasilkemasbotol;
        string areadistribusi;
        string tglselesaiprod;
        string tglkadaluarsa;
        string nokantungpanen;
        string nohalal;
        string nobpom;
        Json json;
        string created;
        bool init;
    }

    struct Json {
        string json;
    }

    AddTraceability[] public arr;
    
    function getAlltraceability() public view returns (AddTraceability[] memory) {
        return arr;
    }
    function StoreAddTraceability(string memory traceabilityid, string memory nokemas, string memory volumehasilkemasbotol, string memory areadistribusi, string memory tglselesaiprod, string memory tglkadaluarsa, string memory nokantungpanen, string memory nohalal, string memory nobpom, string memory json, string memory created) public {
        AddTraceability memory _traceability = AddTraceability(msg.sender, traceabilityid, nokemas, volumehasilkemasbotol, areadistribusi, tglselesaiprod, tglkadaluarsa, nokantungpanen, nohalal, nobpom, Json(json), created, true);
        traceabilityMappingId[_traceability.traceabilityid] = _traceability;
        arr.push(_traceability);
    }
    function getDataById(string memory traceabilityid) public view returns (AddTraceability memory)  {
        return (traceabilityMappingId[traceabilityid]);
    }
}