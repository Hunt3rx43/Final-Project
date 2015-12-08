        var astrColor = [['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']];

        var strTurn = '';
        var bNewGame = false;
        var bDown = false;
        var bUp = false;
        var bRight = false;
        var bLeft = false;
        var bDRight = false;
        var bGameOver = false;
        var bIsEnd = false;
        var iCount = 0;
        var strColor;
        var strOppColor;

        if (strTurn == 'b' )
        {
            strColor = 'b';
            strOppColor = 'w';
        }
        else if (strTurn == 'w')
        {
            strColor = 'w';
            strOppColor = 'b';
        }
        else {
            strTurn = 'b'
            strColor = 'b';
            strOppColor = 'w';
        }

        function vBuild()
        {
            var strHTML, i, j;

            strHTML = "<table style='margin-left:auto; margin-right:auto'>";
            strHTML += "<tr><th colspan='16' style='text-align:center; font-size:xx-Large'> Reversi </th></tr>"
            strHTML += "<tr><td colspan='4' style='text-align:center'> <input type='button' id='btnNew' value='New Game' onclick='vNewGame()' /> </td> <td colspan='4' style='text-align:center'> Black <input type='text' id='txtb' /> </td> <td colspan='4' style='text-align:center'> White <input type='text' id='txtw' /> </td> <td colspan='4' style='text-align:center'> <input type='button' id='btnCompPlay' value='Computer Play' onclick='vCompPlay()' /> </td></tr>"

            for (i = 0; i < 8; i++)
            {
                strHTML += "<tr>";

                for (j = 0; j < 8; j++)
                {
                    strHTML += "<td>";
                        strHTML += "<img src='Images/e.png'"
                    strHTML += " id = 'spot" + i + "," + j + "' onclick='vClick(" + i + "," + j + ")'/>"
                    strHTML += "<td>";
                }
                strHTML += "</tr>"
            }
            strHTML += "<tr><td colspan='16' style='text-align:center'> <textarea id='taOut' cols='45' rows='1' readonly></textarea> </td></tr>"
            strHTML += "</table>"
            document.getElementById('frmReversiGrid').innerHTML = strHTML;
        }

        function vNewGame()
        {
            astrColor = [['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                         ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']];
            strTurn = 'b';

            vBuild();
            astrColor[3][3] = 'w'
            document.getElementById('spot3,3').src = 'Images/w.png';
            astrColor[3][4] = 'b'
            document.getElementById('spot3,4').src = 'Images/b.png';
            astrColor[4][3] = 'b'
            document.getElementById('spot4,3').src = 'Images/b.png';
            astrColor[4][4] = 'w'
            document.getElementById('spot4,4').src = 'Images/w.png';
            bNewGame = true;
        }

        function vClick(iRow, iCol)
        {
            var strID = 'spot' + iRow + ',' + iCol;
            var strColor;
            var strOppColor;

            if(bNewGame == true)
            {
                if (strTurn == 'b')
                {
                    strColor = 'b';
                    strOppColor = 'w';
                }
                else if (strTurn == 'w')
                {
                    strColor = 'w';
                    strOppColor = 'b';
                }
                
                    if (astrColor[iRow][iCol] == 'e' && iNumReverse(iRow, iCol, strColor, strOppColor) > 0)
                    {
                        if (strTurn == 'b')
                        {
                            document.getElementById(strID).src = "Images/b.png";
                            astrColor[iRow][iCol] = 'b';
                            vReverse(iRow, iCol, strColor, strOppColor)
                            strTurn = 'w';
                        }

                        else if (strTurn == 'w')
                        {
                            document.getElementById(strID).src = "Images/w.png";
                            astrColor[iRow][iCol] = 'w';
                            vReverse(iRow, iCol, strColor, strOppColor)
                            strTurn = 'b';
                        }
                        vGameOver();
                    }
            }
        }


        function iNumReverse(iRow, iCol, strColor, strOppColor)
        {
            bDown = false;
            bUp = false;
            bRight = false;
            bLeft = false;
            bDRight = false;
            bURight = false;
            bDLeft = false;
            bULeft = false;
            bIsEnd = false;
            var iCount = 0;
            var iTempCount = 0;
            var i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;

            if (bIsEnd == false)
            {
                //Down

                while (i <= 7 && astrColor[i][iCol] == strOppColor)
                {
                    i++;
                    iTempCount++;
                }
                if (i <= 7 && astrColor[i][iCol] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bDown = true;
                    }

                iTempCount = 0;

                //Up

                while (j >= 0 && astrColor[j][iCol] == strOppColor)
                {
                    j--;
                    iTempCount++;
                }
                if (j >= 0 && astrColor[j][iCol] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bUp = true;
                    }
                iTempCount = 0;

                //Right

                while (k <= 7 && astrColor[iRow][k] == strOppColor) 
                {
                    k++;
                    iTempCount++;
                }
                if (k <= 7 && astrColor[iRow][k] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bRight = true;
                    }
                iTempCount = 0;

                //Left

                while (m >= 0 && astrColor[iRow][m] == strOppColor)
                {
                    m--;
                    iTempCount++;
                }
                if (m >= 0 && astrColor[iRow][m] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bLeft = true;
                    }
                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;

                iTempCount = 0;

                //Down Right

                while (i <= 7 && k <= 7 && astrColor[i][k] == strOppColor)
                {
                    i++;
                    k++;
                    iTempCount++;
                }
                if (i <= 7 && k <= 7 && astrColor[i][k] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bDRight = true;
                    }
                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;

                iTempCount = 0;

                //Up Right

                while (j >= 0 && k <= 7 && astrColor[j][k] == strOppColor)
                {
                    j--;
                    k++;
                    iTempCount++;
                }
                if (j >= 0 && k <= 7 && astrColor[j][k] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bURight = true;
                    }
                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;

                iTempCount = 0;

                //Down Left

                while (i <= 7 && m <= 7 && astrColor[i][m] == strOppColor)
                {
                    i++;
                    m--;
                    iTempCount++;
                }
                if (i <= 7 && m <= 7 && astrColor[i][m] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bDLeft = true;
                    }
                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;

                iTempCount = 0;

                //Up Left

                while (j >= 0 && m <= 7 && astrColor[j][m] == strOppColor)
                {
                    j--;
                    m--;
                    iTempCount++;
                }
                if (j >= 0 && m <= 7 && astrColor[j][m] == strColor && iTempCount > 0)
                    {
                        iCount += iTempCount;
                        bULeft = true;
                    }
            }

            
            document.getElementById('taOut').value = iCount;
            return iCount;
        }

        function vReverse(iRow, iCol, strColor, strOppColor)
        {
            var strID = 'spot' + iRow + ',' + iCol;
            var i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;
            
                while (i <= 7 && astrColor[i][iCol] == strOppColor && bDown == true)
                {
                    document.getElementById('spot' + i + ',' + iCol).src = 'Images/' + strColor + '.png';
                    astrColor[i][iCol] = strColor;
                    i++;
                }


                while (j >= 0 && astrColor[j][iCol] == strOppColor && bUp == true)
                {
                    document.getElementById('spot' + j + ',' + iCol).src = 'Images/' + strColor + '.png';
                    astrColor[j][iCol] = strColor;
                    j--;
                }


                while (k <= 7 && astrColor[iRow][k] == strOppColor && bRight == true)
                {
                    document.getElementById('spot' + iRow + ',' + k).src = 'Images/' + strColor + '.png';
                    astrColor[iRow][k] = strColor;
                    k++;
                }


                while (m >= 0 && astrColor[iRow][m] == strOppColor && bLeft == true)
                {
                    document.getElementById('spot' + iRow + ',' + m).src = 'Images/' + strColor + '.png';
                    astrColor[iRow][m] = strColor;
                    m--;
                }


                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;
                while (i <= 7 && k <= 7 && astrColor[i][k] == strOppColor && bDRight == true)
                {
                    document.getElementById('spot' + i + ',' + k).src = 'Images/' + strColor + '.png';
                    astrColor[i][k] = strColor;
                    i++;
                    k++;
                }


                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;
                while (j >= 0 && k <= 7 && astrColor[j][k] == strOppColor && bURight == true)
                {
                    document.getElementById('spot' + j + ',' + k).src = 'Images/' + strColor + '.png';
                    astrColor[j][k] = strColor;
                    j--;
                    k++;
                }


                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;
                while (i <= 7 && m >= 0 && astrColor[i][m] == strOppColor && bDLeft == true)
                {
                    document.getElementById('spot' + i + ',' + m).src = 'Images/' + strColor + '.png';
                    astrColor[i][m] = strColor;
                    i++;
                    m--;
                }


                i = iRow + 1; j = iRow - 1; k = iCol + 1; m = iCol - 1;
                while (j >= 0 && m >= 0 && astrColor[j][m] == strOppColor && bULeft == true)
                {
                    document.getElementById('spot' + j + ',' + m).src = 'Images/' + strColor + '.png';
                    astrColor[j][m] = strColor;
                    j--;
                    m--;
                }
        }

        function vGameOver()
        {
            var iBCount = 0;
            var iWCount = 0;
            var iECount = 0;
            var iHCount = 0;
            var i;
            var j;
            for (i = 0; i <= 7; i++)
                for (j = 0; j <= 7; j++)
                {
                    if (astrColor[i][j] == 'b')
                        iBCount++;
                    else if (astrColor[i][j] == 'w')
                        iWCount++;
                    else
                        iECount++;
                }
            document.getElementById('txtb').value = iBCount;
            document.getElementById('txtw').value = iWCount;

            if (iECount == 0)
                bIsEnd = true;

            if (iBCount > iWCount)
                iHCount = 'Black';
            else
                iHCount = 'White';

            if (bIsEnd == true)
                document.getElementById('taOut').value = 'The winner is ' + iHCount + '.';
        }

        function vCompPlay()
        {
            var i;
            var j;
            var iTurned = 0;
            var iMaxTurned = 0;
            var iMax = 0;
            var jMax = 0;
            
            if (!bIsEnd)
            {
                for (i = 0; i <= 7; i++)
                    for (j = 0; j <= 7; j++)
                    {
                        iNumReverse(i,j,strColor,strOppColor);
                        iTurned = document.getElementById('taOut').value;
                        if (astrColor[i][j] == 'e')
                        {
                                if (iTurned > iMaxTurned)
                                {
                                    iMaxTurned = iTurned;
                                    iMax = i;
                                    jMax = j;
                                }
                        }
                    }
                if (strColor == 'b')
                {
                    strColor = 'w';
                    strOppColor = 'b';
                }
                else
                {
                    strColor = 'b';
                    strOppColor = 'w';
                }
                vClick(iMax, jMax);
                vGameOver();
            }
        }