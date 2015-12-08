var astrColor = [['y', 'y', 'y', 'y'], ['b', 'b', 'b', 'b'], ['y', 'y', 'y', 'y'], ['b', 'b', 'b', 'b'], ['y', 'y', 'y', 'y'], ['b', 'b', 'b', 'b'], ['y', 'y', 'y', 'y'], ['b', 'b', 'b', 'b']];
    function vBuild()
    {
        var strHTML, i, j;

        strHTML = "<table style='margin-left:auto; margin-right:auto'>";

        for (i = 0; i < 8; i++)
        {
            strHTML += "<tr>";

            for (j = 0; j < 8; j++)
            {
                strHTML += "<td>";
                if (astrColor[i][j] == 'b')
                    strHTML += "<img src='Images/BlackSquare.png'"
                else if (astrColor[i][j] == 'y')
                    strHTML += "<img src='Images/YellowSquare.png'"
                strHTML += " id = 'img" + i + "," + j + "' onclick='vClick(" + i + "," + j + ")'/>"
                strHTML += "<td>";
            }
            strHTML += "</tr>"
        }
        strHTML += "</table>"
        document.getElementById('frmImageGrid').innerHTML = strHTML;
    }

    function vClick(iRow, iCol)
    {
        var strID;

        for (i = 0; i < 4; i++)
        {
            strID = "img" + i + "," + iCol;
            if (astrColor[iRow][iCol] == 'y')
            {
                document.getElementById(strID).src = 'Images/YellowSquare.png'
                astrColor[i][iCol] = 'y';
            }
            else
            {
                document.getElementById(strID).src = 'Images/BlackSquare.png'
                astrColor[i][iCol] = 'b';
            }
        }

        for (j = 0; j < 4; j++)
        {
            strID = "img" + iRow + "," + j;
            if (astrColor[iRow][iCol] == 'y')
            {
                document.getElementById(strID).src = 'Images/YellowSquare.png'
                astrColor[iRow][j] = 'y';
            }
            else
            {
                document.getElementById(strID).src = 'Images/BlackSquare.png'
                astrColor[iRow][j] = 'b';
            }
        }
    }