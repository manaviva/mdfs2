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

  ext.Chat = function(str){
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
  };

  ext.drawLine = function(id, data, x, y, z, x1, y1, z1){
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
  };

  ext.drawCircle = function(id, data, radius, x, y, z, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawCircle/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawEllipse = function(id, data, radius, ratio, x, y, z, st, en, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawEllipse/"+id+"/"+data+"/"+radius+"/"+ratio+"/"+x+"/"+y+"/"+z+"/"+st+"/"+en+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawEllipseBall = function(id, data, radius, ratio_y, ratio_z, x, y, z, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawEllipseBall/"+id+"/"+data+"/"+radius+"/"+ratio_y+"/"+ratio_z+"/"+x+"/"+y+"/"+z+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawEllipseBallPart = function(id, data, radius, ratio_y, ratio_z, x, y, z, st_xr, en_xr, st_zr, en_zr, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawEllipseBallPart/"+id+"/"+data+"/"+radius+"/"+ratio_y+"/"+ratio_z+"/"+x+"/"+y+"/"+z+"/"+st_xr+"/"+en_xr+"/"+st_zr+"/"+en_zr+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawEgg = function(id, data, radius, x, y, z, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawEgg/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawEggBall = function(id, data, radius, x, y, z, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawEggBall/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawArc = function(id, data, radius, x, y, z, st, en, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawArc/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z+"/"+st+"/"+en+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawArcRadis = function(id, data, radius, x, y, z, st, en, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawArcRadis/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z+"/"+st+"/"+en+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawBallPart = function(id, data, radius, x, y, z, st_xr, en_xr, st_zr, en_zr, pit, rot){
    $.ajax({
      type: "GET",
      url: consturl+"drawBallPart/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z+"/"+st_xr+"/"+en_xr+"/"+st_zr+"/"+en_zr+"/"+pit+"/"+rot,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.drawBall = function(id, data, radius, x, y, z){
    $.ajax({
      type: "GET",
      url: consturl+"drawBall/"+id+"/"+data+"/"+radius+"/"+x+"/"+y+"/"+z,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.getPlayerPos = function(){
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
  };

  ext.getPlayerRotPit = function(){
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
  };

  ext.getBlockInfo = function(x, y, z){
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
  };

  ext.Teleport = function(x, y, z){
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
  };

  ext.setPlayerRotPit = function(rot, pit){
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
  };

  ext.setBlockData = function(id, data, x, y, z){
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
  };

  ext.setBlocks = function(id, data, x, y, z, x1, y1, z1){
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
  };

  ext.drawText = function(str, font, id1, id2, deg, x, y, z){
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
  };

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

  ext.my_rtn = function(){
    return r_my_rtn;
  };

  ext.setPen = function(x, y, z, rot, pit){
    $.ajax({
      type: "GET",
      url: consturl+"setPen/"+x+"/"+y+"/"+z+"/"+rot+"/"+pit,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.downPen = function(id, data){
    $.ajax({
      type: "GET",
      url: consturl+"downPen/"+id+"/"+data,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.strokePen = function(d){
    $.ajax({
      type: "GET",
      url: consturl+"strokePen/"+d,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.turnPen = function(rot,pit){
    $.ajax({
      type: "GET",
      url: consturl+"turnPen/"+rot+"/"+pit,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.upPen = function(){
    $.ajax({
      type: "GET",
      url: consturl+"upPen",
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_status=msg[1];
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

  ext.doSomething = function(args){
    $.ajax({
      type: "GET",
      url: consturl+"doSomething/"+args,
      dataType: "text"
    }).done(function( text ) {
      var msg=text.split(" ");
      r_my_rtn=msg[1];
      r_status=constOK_Done;
    }).fail(function( text ) {
      r_status=constErrNone;
    });
  };

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
        [" ", "１つ置く ｜ブロック ID:%n 値:%n ｜座標 x:%n y:%n z:%n", "setBlockData",1,0,0,0,0],
        [" ", "直線を描く ｜ブロック ID:%n 値:%n ｜座標 x:%n y:%n z:%n ～座標 x:%n y:%n z:%n", "drawLine",1,0,0,0,0,0,0,1],
        [" ", "弧を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n ｜開始:%n °　終了:%n ° ｜回転 上下:%n °　左右:%n °", "drawArc",1,0,10,0,0,0,0,180,0,0],
        [" ", "円を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n ｜回転 上下:%n °　左右:%n °", "drawCircle",1,0,10,0,0,0,0,0],
        [" ", "おうぎ形を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n ｜開始:%n °　終了:%n ° ｜回転 上下:%n °　左右:%n °", "drawArcRadis",1,0,10,0,0,0,0,180,0,0],
        [" ", "だ円を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜Z比率:%n ｜中心 x:%n y:%n z:%n ｜開始:%n °　終了:%n ° ｜回転 上下:%n °　左右:%n °", "drawEllipse",1,0,10,1.5,0,0,0,0,360,0,0],
        [" ", "卵の輪郭を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n ｜回転 上下:%n °　左右:%n °", "drawEgg",1,0,10,0,10,0,0,0],
        [" ", "文字列を描く %s フォント:%m.Font ｜文字ブロックID:%n ｜背景ブロックID:%n ｜向き:%n °｜座標 x:%n y:%n z:%n", "drawText","Great!","8x8",1,0,0,0,0,0],
        [" ", "直方体を描く ｜ブロック ID:%n 値:%n ｜座標 x:%n y:%n z:%n ～座標 x:%n y:%n z:%n", "setBlocks",1,0,0,0,0,0,0,1],
        [" ", "球を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n", "drawBall",1,0,10,0,10,0],
        [" ", "球の一部を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n ｜偏角 xr:%n °～ %n ° zr:%n °～ %n °｜回転 上下:%n °　左右:%n °", "drawBallPart",1,0,10,0,10,0,0,180,0,180,0,0],
        [" ", "だ円体を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜Y比率:%n Z比率:%n ｜中心 x:%n y:%n z:%n ｜回転 上下:%n °　左右:%n °", "drawEllipseBall",1,0,10,0.5,1.5,0,10,0,0,0],
        [" ", "だ円体の一部を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜Y比率:%n Z比率:%n ｜中心 x:%n y:%n z:%n ｜偏角 xr:%n °～ %n ° zr:%n °～ %n °｜回転 上下:%n °　左右:%n °", "drawEllipseBallPart",1,0,10,0.5,1.5,0,10,0,0,180,0,180,0,0],
        [" ", "卵の立体を描く ｜ブロック ID:%n 値:%n ｜半径:%n ｜中心 x:%n y:%n z:%n ｜回転 上下:%n °　左右:%n °", "drawEggBall",1,0,10,0,10,0,0,0],
        [" ", "ブロックを調べる 座標 x:%n y:%n z:%n", "getBlockInfo",0,0,0],
        [" ", "今の位置を調べる", "getPlayerPos"],
        [" ", "今の向きを調べる", "getPlayerRotPit"],
        [" ", "テレポートする 座標 x:%n y:%n z:%n", "Teleport",0,0,0],
        [" ", "向きを設定する 左右 %n °　上下 %n °", "setPlayerRotPit",0,0],
        [" ", "チャットする「 %s 」", "Chat","Hello!"],
        [" ", "ペンの位置と向きを ｜座標 x:%n y:%n z:%n ｜方角 %m.rot ｜上下の向き %m.pitch ｜ に設定する", "setPen",0,0,0,"南","水平"],
        [" ", "ペンを下ろす ｜ブロック ID:%n 値:%n", "downPen",1,0],
        [" ", "ペンを長さ %n ブロック分進める", "strokePen",1],
        [" ", "ペンの向きを 右に %n °　上に %n ° ずつ変える", "turnPen",30,0],
        [" ", "ペンを上げる", "upPen"],
        [" ", "周囲をリセット", "ResetHere"],
        [" ", "原点付近を平地にリセットする", "Reset"],
        [" ", "マインクラフトに接続する", "ConnectLocal"],
        [" ", "サーバーに接続する host:%s port: %n ", "ConnectServer","localhost","4711"],
        [" ", "切断する", "Disconnect"],
        [" ", "オリジナル処理をする: %s", "doSomething","処理に渡す数字や文字"],
        ["r", "ブロックのID", "blockId"],
        ["r", "ブロックの値", "blockData"],
        ["r", "自分のＸ座標", "pos_x"],
        ["r", "自分のＹ座標", "pos_y"],
        ["r", "自分のＺ座標", "pos_z"],
        ["r", "自分の向き（上下）", "pitch"],
        ["r", "自分の向き（左右）", "rotation"],
        ["r", "状態", "status"],
        ["r", "戻り値", "my_rtn"]
    ],
    menus: {
        Font: ['8x8','10pt','10ptbold','6pt','6ptmono','7pt','9pt','9ptbold','architectlg','architectsm','bigfoot','casual','casualbold','macfont','mactall','metrix7pt','nicefont','nicefontbold','palmboldeu','palmnormeu','pda','pdabold','script','squat11pt','squat8pt','squatcaps8pt','tallfont','thin11pt','thin9pt'],
        rot: ['北','北東','東','南東','南','南西','西','北西'],
        pitch: ['真上','斜め上45度','水平','斜め下45度','真下']
    },
    url: consturl,
    displayName: 'Minecraft-Driver 1.0'
  };
  ScratchExtensions.register('Minecraft-Driver', descriptor, ext);
})({});
