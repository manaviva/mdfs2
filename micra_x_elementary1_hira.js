(function(ext){

  var consturl = "http://localhost:12345/";
  var constErrNone = "失敗：サーバーが応答しません";
  var constOK_Done = "成功";

  var r_pos_x=0;
  var r_pos_y=0;
  var r_pos_z=0;
  var r_blockId=0;
  var r_blockData=0;
  var r_status="0";
  var r_rotation=0;
  var r_pitch=0;
  var r_my_rtn="";

  ext._shutdown = function() {};

  ext._getStatus = function(){
    if(r_status == constOK_Done){
      return {status: 2, msg: 'Ready'};
    }else if(r_status == constErrNone){
      return {status: 1, msg: 'Server down'};
    }else{
      return {status: 1, msg: 'Minecraft disconnected'};
    }
  };

  function Chat(str){
    $.ajax({
      type: "GET",
      url: consturl+"Chat/"+str,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.Chat = Chat;

  function drawLine(id, data, x, y, z, x1, y1, z1){
    $.ajax({
      type: "GET",
      url: consturl+"drawLine/"+id+"/"+data+"/"+x+"/"+y+"/"+z+"/"+x1+"/"+y1+"/"+z1,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.drawLine = drawLine;

  function getPlayerPos(){
    $.ajax({
      type: "GET",
      url: consturl+"getPlayerPos",
      dataType: "text"
    }).done(function( text ) {
       // textに文字列で結果が渡される
       r_status=constOK_Done;
       var vlist = text.split("\n");
       for (var i = 0 ; i < vlist.length ; i++){
         var data = vlist[i].split(" ");
         switch(data[0]){
             case '_problem':
               r_status=data[1];
               break;
             case 'pos_x':
               r_pos_x=data[1];
               break;
             case 'pos_y':
               r_pos_y=data[1];
               break;
             case 'pos_z':
               r_pos_z=data[1];
               break;
         }
       }
     }).fail(function( text ) {
       r_status=constErrNone;
     });
  }
  ext.getPlayerPos = getPlayerPos;

  function getPlayerRotPit(){
    $.ajax({
      type: "GET",
      url: consturl+"getPlayerRotPit",
      dataType: "text"
    }).done(function( text ) {
       // textに文字列で結果が渡される
       r_status=constOK_Done;
       var vlist = text.split("\n");
       for (var i = 0 ; i < vlist.length ; i++){
         var data = vlist[i].split(" ");
         switch(data[0]){
             case '_problem':
               r_status=data[1];
               break;
             case 'rotation':
               r_rotation=data[1];
               break;
             case 'pitch':
               r_pitch=data[1];
               break;
         }
       }
     }).fail(function( text ) {
       r_status=constErrNone;
     });
  }
  ext.getPlayerRotPit = getPlayerRotPit;

  function getBlockInfo(x, y, z){
    $.ajax({
      type: "GET",
      url: consturl+"getBlockInfo/"+x+"/"+y+"/"+z,
      dataType: "text"
    }).done(function( text ) {
       // textに文字列で結果が渡される
       r_status=constOK_Done;
       var vlist = text.split("\n");
       for (var i = 0 ; i < vlist.length ; i++){
         var data = vlist[i].split(" ");
         switch(data[0]){
             case '_problem':
               r_status=data[1];
               break;
             case 'blockId':
               r_blockId=data[1];
               break;
             case 'blockData':
               r_blockData=data[1];
               break;
         }
       }
     }).fail(function( text ) {
       r_status=constErrNone;
     });
  }
  ext.getBlockInfo = getBlockInfo;

  function Teleport(x, y, z){
    $.ajax({
      type: "GET",
      url: consturl+"Teleport/"+x+"/"+y+"/"+z,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.Teleport = Teleport;

  function setPlayerRotPit(rot, pit){
    $.ajax({
      type: "GET",
      url: consturl+"setPlayerRotPit/"+rot+"/"+pit,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.setPlayerRotPit = setPlayerRotPit;

  function setBlockData(id, data, x, y, z){
    $.ajax({
      type: "GET",
      url: consturl+"setBlockData/"+id+"/"+data+"/"+x+"/"+y+"/"+z,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.setBlockData = setBlockData;

  function setBlocks(id, data, x, y, z, x1, y1, z1){
    $.ajax({
      type: "GET",
      url: consturl+"setBlocks/"+id+"/"+data+"/"+x+"/"+y+"/"+z+"/"+x1+"/"+y1+"/"+z1,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.setBlocks = setBlocks;

  function drawText(str, font, id1, dat1, id2, dat2, deg, x, y, z){
    $.ajax({
      type: "GET",
      url: consturl+"drawText/"+str+"/"+font+"/"+id1+"/"+dat1+"/"+id2+"/"+dat2+"/"+deg+"/"+x+"/"+y+"/"+z,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  }
  ext.drawText = drawText;

  ext.Reset = function(){
    $.ajax({
      type: "GET",
      url: consturl+"Reset",
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
      if(text != constOK_Done){
      }
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.ConnectLocal = function(){
    $.ajax({
      type: "GET",
      url: consturl+"ConnectLocal",
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.ConnectServer = function(ip, po){
    $.ajax({
      type: "GET",
      url: consturl+"ConnectServer/"+ip+"/"+po,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.Disconnect = function(){
    $.ajax({
      type: "GET",
      url: consturl+"Disconnect",
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.blockId = function(){
      return r_blockId;
  };

  ext.blockData = function(){
      return r_blockData;
  };

  ext.pos_x = function(){
      return r_pos_x;
  };

  ext.pos_y = function(){
      return r_pos_y;
  };

  ext.pos_z = function(){
      return r_pos_z;
  };

  ext.pitch = function(){
    return r_pitch;
  };

  ext.rotation = function(){
    return r_rotation;
  };

  ext.status = function(){
    return r_status;
  };

  var BLOCKs = [
		[0,   0,  'くうき'],
		[1,   0,  'いし'],
		[2,   0,  'くさ'],
		[3,   0,  'つち'],
		[4,   0,  'まるいし'],
		[5,   0,  'オークのもくざい'],
		[5,   1,  'まつのもくざい'],
		[5,   2,  'シラカバのもくざい'],
		[5,   3,  'ジャングルのもくざい'],
		[5,   4,  'アカシアのもくざい'],
		[5,   5,  'ダークオークのもくざい'],
		[6,   0,  'なえぎ'],
		[7,   0,  'がんばん'],
		[8,   0,  'ながれるみず'],
		[9,   0,  'とまったみず'],
		[10,  0,  'ながれるようがん'],
		[11,  0,  'とまったようがん'],
		[12,  0,  'すな'],
		[13,  0,  'じゃり'],
		[17,  0,  'げんぼく'],
		[20,  0,  'ガラス'],
		[22,  0,  'ラピスラズリブロック'],
		[24,  0,  'さがん'],
		[41,  0,  'きんブロック'],
		[42,  0,  'てつブロック'],
		[44,  0,  'いしハーフ'],
		[45,  0,  'レンガ'],
		[49,  0,  'こくようせき'],
		[57,  0,  'ダイヤモンドブロック'],
		[79,  0,  'こおり'],
		[80,  0,  'ゆきブロック'],
		[88,  0,  'ソウルサンド'],
		[133, 0,  'エメラルドブロック'],
		[152, 0,  'レッドストーンブロック'],
		[153, 0,  'ネザーすいしょうブロック'],
		[165, 0,  'スライムブロック']
    ];

   function block_NameToID(bName) {
        for(var i=0; i<BLOCKs.length; i++){
            if(bName == BLOCKs[i][2]){
                console.log("BlockID:" + (BLOCKs[i][0]));
                id_data = [parseInt(BLOCKs[i][0]), parseInt(BLOCKs[i][1])];
                return id_data;
            }
        }
        return [1, 0];
    }
    ext.block_NameToID = block_NameToID;

  var REDs = [
		[23,  0,  'ディスペンサー'],
		[25,  0,  'おんぷブロック'],
		[27,  0,  'パワードレース'],
		[28,  0,  'ディテクターレール'],
		[33,  0,  'ピストン'],
		[46,  0,  'TNT'],
		[52,  0,  'モンスタースポナー'],
		[54,  0,  'チェスト'],
		[66,  0,  'レール'],
		[69,  0,  'レバー'],
		[72,  0,  'きのかんあつばん'],
		[77,  0,  'いしのボタン'],
		[137, 0,  'コマンドブロック'],
		[138, 0,  'ビーコン'],
		[143, 0,  'きのボタン'],
		[151, 0,  'にっしょうセンサー']
  ];

   function red_NameToID(bName) {
        for(var i=0; i<REDs.length; i++){
            if(bName == REDs[i][2]){
                console.log("BlockID:" + (REDs[i][0]));
                id_data = [parseInt(REDs[i][0]), parseInt(REDs[i][1])];
                return id_data;
            }
        }
        return [1, 0];
    }
    ext.red_NameToID = red_NameToID;

  var DECOs = [
		[26,  0,  'ベッド'],
		[30,  0,  'クモのす'],
		[39,  0,  'ちゃキノコ'],
		[40,  0,  'あかキノコ'],
		[47,  0,  'ほんだな'],
		[50,  0,  'たいまつ'],
		[51,  0,  'ほのお'],
		[53,  0,  'オークのきのかいだん'],
		[64,  0,  'きのドア'],
		[65,  0,  'はしご'],
		[71,  0,  'てつのドア'],
		[78,  0,  'ゆき'],
		[81,  0,  'サボテン'],
		[89,  0,  'グロウストーン'],
		[91,  0,  'ジャック・オ・ランタン'],
		[113, 0,  'ネザーレンガのフェンス'],
		[175, 0,  'ひまわり']
    ];

   function deco_NameToID(bName) {
        for(var i=0; i<DECOs.length; i++){
            if(bName == DECOs[i][2]){
                console.log("BlockID:" + (DECOs[i][0]));
                id_data = [parseInt(DECOs[i][0]), parseInt(DECOs[i][1])];
                return id_data;
            }
        }
        return [1, 0];
    }
    ext.deco_NameToID = deco_NameToID;

  var WOOLs = [
		[35,  0,  'ようもう'],
		[35,  0,  'しろいろのようもう'],
		[35,  1,  'だいだいいろのようもう'],
		[35,  2,  'あかむらさきいろのようもう'],
		[35,  3,  'みずいろのようもう'],
		[35,  4,  'きいろのようもう'],
		[35,  5,  'きみどりいろのようもう'],
		[35,  6,  'ももいろのようもう'],
		[35,  7,  'はいいろのようもう'],
		[35,  8,  'うすいはいいろのようもう'],
		[35,  9,  'そらいろのようもう'],
		[35,  10,  'むらさきいろのようもう'],
		[35,  11,  'あおいろのようもう'],
		[35,  12,  'ちゃいろのようもう'],
		[35,  13,  'みどりいろのようもう'],
		[35,  14,  'あかいろのようもう'],
		[35,  15,  'くろいろのようもう']
    ];

   function wool_NameToID(bName) {
        for(var i=0; i<WOOLs.length; i++){
            if(bName == WOOLs[i][2]){
                console.log("BlockID:" + (WOOLs[i][0]));
                id_data = [parseInt(WOOLs[i][0]), parseInt(WOOLs[i][1])];
                return id_data;
            }
        }
        return [1, 0];
    }
    ext.wool_NameToID = wool_NameToID;

  var SGLASSs = [
		[95,  0,  'ステンドグラス'],
		[95,  0,  'しろいろのステンドグラス'],
		[95,  1,  'だいだいいろのステンドグラス'],
		[95,  2,  'あかむらさきいろのステンドグラス'],
		[95,  3,  'みずいろのステンドグラス'],
		[95,  4,  'きいろのステンドグラス'],
		[95,  5,  'きみどりいろのステンドグラス'],
		[95,  6,  'ももいろのステンドグラス'],
		[95,  7,  'はいいろのステンドグラス'],
		[95,  8,  'うすいはいいろのステンドグラス'],
		[95,  9,  'そらいろのステンドグラス'],
		[95,  10,  'むらさきいろのステンドグラス'],
		[95,  11,  'あおいろのステンドグラス'],
		[95,  12,  'ちゃいろのステンドグラス'],
		[95,  13,  'みどりいろのステンドグラス'],
		[95,  14,  'あかいろのステンドグラス'],
		[95,  15,  'くろいろのステンドグラス']
    ];

   function sglass_NameToID(bName) {
        for(var i=0; i<SGLASSs.length; i++){
            if(bName == SGLASSs[i][2]){
                console.log("BlockID:" + (SGLASSs[i][0]));
                id_data = [parseInt(SGLASSs[i][0]), parseInt(SGLASSs[i][1])];
                return id_data;
            }
        }
        return [1, 0];
    }
    ext.sglass_NameToID = sglass_NameToID;

  var CARPETs = [
		[171,  0,  'カーペット'],
		[171,  0,  'しろいろのカーペット'],
		[171,  1,  'だいだいいろのカーペット'],
		[171,  2,  'あかむらさきいろのカーペット'],
		[171,  3,  'みずいろのカーペット'],
		[171,  4,  'きいろのカーペット'],
		[171,  5,  'きみどりのカーペット'],
		[171,  6,  'ももいろのカーペット'],
		[171,  7,  'はいいろのカーペット'],
		[171,  8,  'うすいはいいろのカーペット'],
		[171,  9,  'そらいろのカーペット'],
		[171,  10,  'むらさきいろのカーペット'],
		[171,  11,  'あおいろのカーペット'],
		[171,  12,  'ちゃいろのカーペット'],
		[171,  13,  'みどりいろのカーペット'],
		[171,  14,  'あかいろのカーペット'],
		[171,  15,  'くろいろのカーペット']
    ];

   function carpet_NameToID(bName) {
        for(var i=0; i<CARPETs.length; i++){
            if(bName == CARPETs[i][2]){
                console.log("BlockID:" + (CARPETs[i][0]));
                id_data = [parseInt(CARPETs[i][0]), parseInt(CARPETs[i][1])];
                return id_data;
            }
        }
        return [1, 0];
    }
    ext.carpet_NameToID = carpet_NameToID;
    
    function pre_setBlockData(IdData, x, y, z){
        setBlockData(IdData[0], IdData[1], x, y, z);
    }
    ext.pre_setBlockData = pre_setBlockData;

    function pre_setBlocks(IdData, x1, y1, z1, x2, y2, z2){
        setBlocks(IdData[0], IdData[1], x1, y1, z1, x2, y2, z2);
    }
    ext.pre_setBlocks = pre_setBlocks;

    function pre_drawLine(IdData, x1, y1, z1, x2, y2, z2){
        drawLine(IdData[0], IdData[1], x1, y1, z1, x2, y2, z2);
    }
    ext.pre_drawLine = pre_drawLine;

    function pre_drawText(IdData, aStr, IdData2, aFont, x, y, z){
        if(IdData2 == ' '){
            drawText(aStr, aFont, IdData[0], IdData[1], 0, 0, 0, x, y, z);
        }else{
            drawText(aStr, aFont, IdData[0], IdData[1], IdData2[0], IdData2[1], 0, x, y, z);
        }
    }
    ext.pre_drawText = pre_drawText;

    function ResetHere(){
        $.ajax({
          type: "GET",
          url: consturl+"ResetHere",
          dataType: "text"
        }).done(function( text ) {
          var msg=text.split(" ");
          r_status=msg[1];
          if(text != constOK_Done){
          }
        }).fail(function( text ) {
          r_status=constErrNone;
        });
    }
    ext.ResetHere = ResetHere;

  var descriptor = {
    blocks: [
        [" ", "チャットする「 %s 」", "Chat","Hello!"],
        ['r', "%m.blocks", "block_NameToID", "いし"],
        ['r', "%m.reds", "red_NameToID", "TNT"],
        ['r', "%m.decos", "deco_NameToID", "たいまつ"],
        ['r', "%m.wools", "wool_NameToID", "ようもう"],
        ['r', "%m.sglasss", "sglass_NameToID", "ステンドグラス"],
        ['r', "%m.carpets", "carpet_NameToID", "カーペット"],
        [" ", "%s を おく x:%n y:%n z:%n", "pre_setBlockData"," ",0,0,0],
        [" ", "%s で うめる x:%n y:%n z:%n ～ x:%n y:%n z:%n", "pre_setBlocks"," ",0,0,0,0,0,1],
        [" ", "%s の ちょくせん x:%n y:%n z:%n ～ x:%n y:%n z:%n", "pre_drawLine"," ",0,0,0,0,0,1],
        [" ", "%s の もじれつ %s ｜はいけい を%s フォントを%m.Font x:%n y:%n z:%n", "pre_drawText"," ","Great!"," ","8x8",0,0,0],
        [" ", "テレポートする x:%n y:%n z:%n", "Teleport",0,0,0],
        [" ", "しゅうい を リセット", "ResetHere"],
        [" ", "げんてん で リセット", "Reset"],
        [" ", "マイクラ に せつぞく", "ConnectLocal"],
        [" ", "せつだん する", "Disconnect"],
        [" ", "いま の いち を しらべる", "getPlayerPos"],
        [" ", "ブロック を しらべる x:%n y:%n z:%n", "getBlockInfo",0,0,0],
        [" ", "いま の むき を しらべる", "getPlayerRotPit"],
        [" ", "むき を せってい する ｜さゆう %n °　じょうげ %n °", "setPlayerRotPit",0,0],
        ["r", "ブロック の ID", "blockId"],
        ["r", "ブロック の あたい", "blockData"],
        ["r", "じぶん の Ｘ ざひょう", "pos_x"],
        ["r", "じぶん の Ｙ ざひょう", "pos_y"],
        ["r", "じぶん の Ｚ ざひょう", "pos_z"],
        ["r", "じぶん の むき（じょうげ）", "pitch"],
        ["r", "じぶん の むき（さゆう）", "rotation"],
        ["r", "じょうたい", "status"]
    ],
    menus: {
        Font: ['8x8','10pt','10ptbold','6pt','6ptmono','7pt','9pt','9ptbold','architectlg','architectsm','bigfoot','casual','casualbold','macfont','mactall','metrix7pt','nicefont','nicefontbold','palmboldeu','palmnormeu','pda','pdabold','script','squat11pt','squat8pt','squatcaps8pt','tallfont','thin11pt','thin9pt'],
        blocks: ['くうき','いし','くさ','つち','まるいし','オークのもくざい','まつのもくざい','シラカバのもくざい','ジャングルのもくざい','アカシアのもくざい','ダークオークのもくざい','なえぎ','がんばん','ながれるみず','とまったみ','ながれるようがん','とまったようがん','すな','じゃり','げんぼく','ガラス','ラピスラズリブロック','さがん','きんブロック','てつブロック','いしハーフ','レンガ','こくようせき','ダイヤモンドブロック','こおり','ゆきブロック','ソウルサンド','エメラルドブロック','レッドストーンブロック','ネザーすいしょうブロック','スライムブロック'],
        reds: ['ディスペンサー','おんぷブロック','パワードレース','ディテクターレール','ピストン','TNT','モンスタースポナー','チェスト','レール','レバー','きのかんあつばん','いしのボタン','コマンドブロック','ビーコン','きのボタン','にっしょうセンサー'],
        decos: ['ベッド','クモのす','ちゃキノコ','あかキノコ','ほんだな','たいまつ','ほのお','オークのきのかいだん','きのドア','はしご','てつのドア','ゆき','サボテン','グロウストーン','ジャック・オ・ランタン','ネザーレンガのフェンス','ひまわり'],
        wools: ['ようもう','しろいろのようもう','だいだいいろのようもう','あかむらさきいろのようもう','みずいろのようもう','きいろのようもう','きみどりいろのようもう','ももいろのようもう','はいいろのようもう','うすいはいいろのようもう','そらいろのようもう','むらさきいろのようもう','あおいろのようもう','ちゃいろのようもう','みどりいろのようもう','あかいろのようもう','くろいろのようもう'],
        sglasss: ['ステンドグラス','しろいろのステンドグラス','だいだいいろのステンドグラス','あかむらさきいろのステンドグラス','みずいろのステンドグラス','きいろのステンドグラス','きみどりいろのステンドグラス','ももいろのステンドグラス','はいいろのステンドグラス','うすいはいいろのステンドグラス','そらいろのステンドグラス','むらさきいろのステンドグラス','あおいろのステンドグラス','ちゃいろのステンドグラス','みどりいろのステンドグラス','あかいろのステンドグラス','くろいろのステンドグラス'],
        carpets: ['カーペット','しろいろのカーペット','だいだいいろのカーペット','あかむらさきいろのカーペット','みずいろのカーペット','きいろのカーペット','きみどりいろのカーペット','ももいろのカーペット','はいいろのカーペット','うすいはいいろのカーペット','そらいろのカーペット','むらさきいろのカーペット','あおいろのカーペット','ちゃいろのカーペット','みどりいろのカーペット','あかいろのカーペット','くろいろのカーペット']
    },
    url: consturl,
    displayName: 'Minecraft-Driver 1.0.E1H'
  };
  ScratchExtensions.register('Minecraft-Driver', descriptor, ext);
})({});
