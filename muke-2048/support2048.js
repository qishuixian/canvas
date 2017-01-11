//获取设备可使用的宽度
documentWidth = window.screen.availWidth;
//大方块的宽度
gridContinerWidth = 0.92*documentWidth;
//每一个小方块的宽度
cellSideLength = 0.18*documentWidth;
//每一个小方块的间距
cellSpace = 0.04*documentWidth;
function getPosTop( i , j ){
    return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft( i , j ){
    return cellSpace + j*(cellSpace+cellSideLength);
}
//设置字体颜色
function getNumberBackgroundColor( number ){
    switch( number ){
        case "工兵":return "#eee4da";break;
        case "副排":return "#ede0c8";break;
        case "正排":return "#f2b179";break;
        case "副连":return "#f59563";break;
        case "正连":return "#f67c5f";break;
        case "副团":return "#f65e3b";break;
        case "正团":return "#edcf72";break;
        case "副旅":return "#edcc61";break;
        case "正旅":return "#9c0";break;
        case "副师":return "#33b5e5";break;
        case "正师":return "#09c";break;
        case "军长":return "#a6c";break;
        case "司令":return "#93c";break;
    }

    return "black";
}

function getNumberColor( number ){
    if( number <= 4 )
        return "#776e65";

    return "white";
}

function nospace( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}
//是否向左移动
function canMoveLeft( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 1; j < 4 ; j ++ )
            if( board[i][j] != 0 )
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                    return true;

    return false;
}
//是否向右移动
function canMoveRight( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}
//是否向上移动
function canMoveUp( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}
//是否向下移动
function canMoveDown( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}
//判断横向数据的前格是否为空
function noBlockHorizontal( row , col1 , col2 , board ){
    for( var i = col1 + 1 ; i < col2 ; i ++ )
        if( board[row][i] != 0 )
            return false;
    return true;
}
//判断竖向数据的前格是否为空
function noBlockVertical( col , row1 , row2 , board ){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( board[i][col] != 0 )
            return false;
    return true;
}
//判断是否可以移动
function nomove(board){
    if(canMoveLeft(board) || canMoveRight(board)||canMoveUp(board)||canMoveDown(board))
        return false;
    return true;
}
//填文字
function rankSorting(sorting){
    var rankText=["工兵", "副排", "正排", "副连", "正连",  "副团", "正团", "副旅", "正旅" ,"副师", "正师","军长", "司令"];
    var sortingCate;
    var sortingength=rankText.length-1;
    if (sorting==rankText[sortingength]) {
        sortingCate='alert("恭喜！恭喜！")';
    }
    for(var i=0;i< sortingength-1;i++){
        if (sorting==rankText[i]) {
           sortingCate =rankText[i+1];
            continue;
        }
    }
    return sortingCate;
}
//分数
function getScore( score ){
    switch( score ){
        case "工兵":return 4;break;
        case "副排":return 8;break;
        case "正排":return 16;break;
        case "副连":return 32;break;
        case "正连":return 64;break;
        case "副团":return 128;break;
        case "正团":return 256;break;
        case "副旅":return 512;break;
        case "正旅":return 1014;break;
        case "副师":return 2014;break;
        case "正师":return 4028;break;
        case "军长":return 8036;break;
        case "司令":return 16066;break;
    }

    return 0;
}


