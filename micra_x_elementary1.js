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

  function drawText(str, font, id1, id2, deg, x, y, z){
    $.ajax({
      type: "GET",
      url: consturl+"drawText/"+str+"/"+font+"/"+id1+"/"+id2+"/"+deg+"/"+x+"/"+y+"/"+z,
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
        [0,   0,  '空気'],
        [1,   0,  '石'],
        [2,   0,  '草'],
        [3,   0,  '土'],
        [4,   0,  '丸石'],
        [5,   0,  'オークの木材'],
        [5,   1,  '松の木材'],
        [5,   2,  'シラカバの木材'],
        [5,   3,  'ジャングルの木材'],
        [5,   4,  'アカシアの木材'],
        [5,   5,  'ダークオークの木材'],
        [6,   0,  '苗木'],
        [7,   0,  '岩ばん'],
        [8,   0,  '流れる水'],
        [9,   0,  '止まった水'],
        [10,  0,  '流れる溶岩'],
        [11,  0,  '止まった溶岩'],
        [12,  0,  '砂'],
        [13,  0,  'じゃり'],
        [17,  0,  '原木'],
        [20,  0,  'ガラス'],
        [22,  0,  'ラピスラズリブロック'],
        [24,  0,  '砂岩'],
        [41,  0,  '金ブロック'],
        [42,  0,  '鉄ブロック'],
        [44,  0,  '石ハーフ'],
        [45,  0,  'レンガ'],
        [49,  0,  '黒よう石'],
        [57,  0,  'ダイヤモンドブロック'],
        [79,  0,  '氷'],
        [80,  0,  '雪ブロック'],
        [88,  0,  'ソウルサンド'],
        [133, 0,  'エメラルドブロック'],
        [152, 0,  'レッドストーンブロック'],
        [153, 0,  'ネザー水晶ブロック'],
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
        [25,  0,  '音符ブロック'],
        [27,  0,  'パワードレース'],
        [28,  0,  'ディテクターレール'],
        [33,  0,  'ピストン'],
        [46,  0,  'TNT'],
        [52,  0,  'モンスタースポナー'],
        [54,  0,  'チェスト'],
        [66,  0,  'レール'],
        [69,  0,  'レバー'],
        [72,  0,  '木の感圧版'],
        [77,  0,  '石の感ボタン'],
        [137, 0,  'コマンドブロック'],
        [143, 0,  '木のボタン'],
        [151, 0,  '日照センサー'],
        [175, 0,  'ボタン']
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
        [30,  0,  'クモの巣'],
        [39,  0,  '茶キノコ'],
        [40,  0,  '赤キノコ'],
        [47,  0,  '本だな'],
        [50,  0,  'たいまつ'],
        [51,  0,  '炎'],
        [53,  0,  'オークの木の階段'],
        [64,  0,  '木のドア'],
        [65,  0,  'はしご'],
        [71,  0,  '鉄のドア'],
        [78,  0,  '雪'],
        [81,  0,  'サボテン'],
        [89,  0,  'グロウストーン'],
        [91,  0,  'ジャック・オ・ランタン'],
        [113, 0,  'ネザーレンガのフェンス'],
        [138, 0,  'ビーコン']
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
        [35,  0,  '羊毛'],
        [35,  0,  '白色の羊毛'],
        [35,  1,  'だいだい色の羊毛'],
        [35,  2,  '赤むらさき色の羊毛'],
        [35,  3,  '水色の羊毛'],
        [35,  4,  '黄色の羊毛'],
        [35,  5,  '黄緑色の羊毛'],
        [35,  6,  'もも色の羊毛'],
        [35,  7,  '灰色の羊毛'],
        [35,  8,  'うすい灰色の羊毛'],
        [35,  9,  '空色の羊毛'],
        [35,  10,  'むらさき色の羊毛'],
        [35,  11,  '青色の羊毛'],
        [35,  12,  '茶色の羊毛'],
        [35,  13,  '緑色の羊毛'],
        [35,  14,  '赤色の羊毛'],
        [35,  15,  '黒色の羊毛']
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
        [95,  0,  '白色のステンドグラス'],
        [95,  1,  'だいだい色のステンドグラス'],
        [95,  2,  '赤むらさき色のステンドグラス'],
        [95,  3,  '水色のステンドグラス'],
        [95,  4,  '黄色のステンドグラス'],
        [95,  5,  '黄緑色のステンドグラス'],
        [95,  6,  'もも色のステンドグラス'],
        [95,  7,  '灰色のステンドグラス'],
        [95,  8,  'うすい灰色のステンドグラス'],
        [95,  9,  '空色のステンドグラス'],
        [95,  10,  'むらさき色のステンドグラス'],
        [95,  11,  '青色のステンドグラス'],
        [95,  12,  '茶色のステンドグラス'],
        [95,  13,  '緑色のステンドグラス'],
        [95,  14,  '赤色のステンドグラス'],
        [95,  15,  '黒色のステンドグラス']
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
        [171,  0,  '白色のカーペット'],
        [171,  1,  'だいだい色のカーペット'],
        [171,  2,  '赤むらさき色のカーペット'],
        [171,  3,  '水色のカーペット'],
        [171,  4,  '黄色のカーペット'],
        [171,  5,  '黄緑色のカーペット'],
        [171,  6,  'もも色のカーペット'],
        [171,  7,  '灰色のカーペット'],
        [171,  8,  'うすい灰色のカーペット'],
        [171,  9,  '空色のカーペット'],
        [171,  10,  'むらさき色のカーペット'],
        [171,  11,  '青色のカーペット'],
        [171,  12,  '茶色のカーペット'],
        [171,  13,  '緑色のカーペット'],
        [171,  14,  '赤色のカーペット'],
        [171,  15,  '黒色のカーペット']
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

    function pre_drawText(IdData, aStr, aFont, x, y, z){
        drawText(aStr, aFont, IdData[0], 0, 0, x, y, z);
    }
    ext.pre_drawText = pre_drawText;

    function ResetHere(){
        getPlayerPos();
        sleep(500);
        // reset, the kind of set blocks is depends on height
        var my_x = parseInt(r_pos_x);
        var my_y = parseInt(r_pos_y);
        var my_z = parseInt(r_pos_z);
        alert('(x,y,z)=(' + my_x + ',' + my_y + ',' + my_z + ')');
        if(50 <= my_y){
            setBlocks(0,0, (my_x -50), (my_y-50), (my_z -50), (my_x +50), (my_y+50), (my_z +50));
        }else if( -51 < my_y && my_y < 50){
            setBlocks(0, 0, (my_x -50), 0, (my_z -50), (my_x +50), (my_y+50), (my_z +50));
            if(my_y <= 49){
                setBlocks(2, 0, (my_x -50), -1, (my_z -50), (my_x +50), -1, (my_z +50));
            }
            if(my_y <= 48){
                setBlocks(1, 0, (my_x -50), (my_y-50), (my_z -50), (my_x +50), -2, (my_z +50));
            }
        }else if( my_y <= -52 ){
            setBlocks(1, 0, (my_x -50), (my_y-50), (my_z -50), (my_x +50), (my_y+50), (my_z +50));
        }
        Chat('reset around here!');
    }
    ext.ResetHere = ResetHere;

  var descriptor = {
    blocks: [
        [" ", "チャットする「 %s 」", "Chat","Hello!"],
        ['r', "%m.blocks", "block_NameToID", "石"],
        ['r', "%m.reds", "red_NameToID", "TNT"],
        ['r', "%m.decos", "deco_NameToID", "たいまつ"],
        ['r', "%m.wools", "wool_NameToID", "羊毛"],
        ['r', "%m.sglasss", "sglass_NameToID", "ステンドグラス"],
        ['r', "%m.carpets", "carpet_NameToID", "カーペット"],
        [" ", "%s を置く x:%n y:%n z:%n", "pre_setBlockData"," ",0,0,0],
        [" ", "%s でうめる x:%n y:%n z:%n ～ x:%n y:%n z:%n", "pre_setBlocks"," ",0,0,0,0,0,1],
        [" ", "%s の直線 x:%n y:%n z:%n ～ x:%n y:%n z:%n", "pre_drawLine"," ",0,0,0,0,0,1],
        [" ", "%s の文字列 %s フォント:%m.Font x:%n y:%n z:%n", "pre_drawText"," ","Great!","8x8",0,0,0],
        [" ", "テレポートする x:%n y:%n z:%n", "Teleport",0,0,0],
        [" ", "周囲をリセット", "ResetHere"],
        [" ", "原点でリセット", "Reset"],
        [" ", "マイクラに接続", "ConnectLocal"],
        [" ", "切断する", "Disconnect"],
        [" ", "今の位置を調べる", "getPlayerPos"],
        [" ", "ブロックを調べる x:%n y:%n z:%n", "getBlockInfo",0,0,0],
        [" ", "今の向きを調べる", "getPlayerRotPit"],
        [" ", "向きを設定する 左右 %n °　上下 %n °", "setPlayerRotPit",0,0],
        ["r", "ブロックのID", "blockId"],
        ["r", "ブロックの値", "blockData"],
        ["r", "自分のＸ座標", "pos_x"],
        ["r", "自分のＹ座標", "pos_y"],
        ["r", "自分のＺ座標", "pos_z"],
        ["r", "自分の向き（上下）", "pitch"],
        ["r", "自分の向き（左右）", "rotation"],
        ["r", "状態", "status"]
    ],
    menus: {
        Font: ['8x8','10pt','10ptbold','6pt','6ptmono','7pt','9pt','9ptbold','architectlg','architectsm','bigfoot','casual','casualbold','macfont','mactall','metrix7pt','nicefont','nicefontbold','palmboldeu','palmnormeu','pda','pdabold','script','squat11pt','squat8pt','squatcaps8pt','tallfont','thin11pt','thin9pt'],
        blocks: ['空気','石','草','土','丸石','オークの木材','松の木材','シラカバの木材','ジャングルの木材','アカシアの木材','ダークオークの木材','苗木','岩ばん','流れる水','止まった水','流れる溶岩','止まった溶岩','砂','じゃり','原木','ガラス','ラピスラズリブロック','砂岩','金ブロック','鉄ブロック','石ハーフ','レンガ','黒よう石','ダイヤモンドブロック','氷','雪ブロック','ソウルサンド','エメラルドブロック','レッドストーンブロック','ネザー水晶ブロック','スライムブロック'],
        reds: ['ディスペンサー','音符ブロック','パワードレース','ディテクターレール','ピストン','TNT','モンスタースポナー','チェスト','レール','レバー','木の感圧版','石の感ボタン','コマンドブロック','木のボタン','日照センサー','ボタン'],
        decos: ['ベッド','クモの巣','茶キノコ','赤キノコ','本だな','たいまつ','炎','オークの木の階段','木のドア','はしご','鉄のドア','雪','サボテン','グロウストーン','ジャック・オ・ランタン','ネザーレンガのフェンス','ビーコン'],
        wools: ['羊毛','白色の羊毛','だいだい色の羊毛','赤むらさき色の羊毛','水色の羊毛','黄色の羊毛','黄緑色の羊毛','もも色の羊毛','灰色の羊毛','うすい灰色の羊毛','空色の羊毛','むらさき色の羊毛','青色の羊毛','茶色の羊毛','緑色の羊毛','赤色の羊毛','黒色の羊毛'],
        sglasss: ['ステンドグラス','白色のステンドグラス','だいだい色のステンドグラス','赤むらさき色のステンドグラス','水色のステンドグラス','黄色のステンドグラス','黄緑色のステンドグラス','もも色のステンドグラス','灰色のステンドグラス','うすい灰色のステンドグラス','空色のステンドグラス','むらさき色のステンドグラス','青色のステンドグラス','茶色のステンドグラス','緑色のステンドグラス','赤色のステンドグラス','黒色のステンドグラス'],
        carpets: ['カーペット','白色のカーペット','だいだい色のカーペット','赤むらさき色のカーペット','水色のカーペット','黄色のカーペット','黄緑色のカーペット','もも色のカーペット','灰色のカーペット','うすい灰色のカーペット','空色のカーペット','むらさき色のカーペット','青色のカーペット','茶色のカーペット','緑色のカーペット','赤色のカーペット','黒色のカーペット']
    },
    url: consturl,
    displayName: 'Minecraft-Driver 1.0.E1'
  };
  ScratchExtensions.register('Minecraft-Driver', descriptor, ext);
})({});
