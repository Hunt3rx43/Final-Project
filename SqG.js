        //Create 8 x 8 array and fill with random numbers

        var aiColor = new Array(8);
        var i, j;
        for (i = 0; i < 8; i++)
            aiColor[i] = new Array(8);
        for (i = 0; i < 8; i++)
            for (j = 0; j < 8; j++)
                aiColor[i][j] = Math.floor(Math.random() * 8);

        function vInit() 
        {
            //Initialize the string variable where we will store all the HTML code.
            var strHTML = '';

            var i, j;

            //Start table
            strHTML = "<table style='margin-left:auto; margin-right:auto'>";

            //Loop through the rows to build the table
            for (i = 0; i < 8; i++)
            {
                strHTML += "<tr>";
                //Loop through the cols in that row
                for (j = 0; j < 8; j++) 
                    strHTML += "<td> <img src='" + aiColor[i][j] + ".jpg' id='square" + i + "," + j + "' onclick='vClickSquare(" + i + "," + j + ")'/> </td>";

                strHTML += "</tr>";
            }
            strHTML += "<tr> <td colspan='8' style='text-align:center'> <input type='button' id='btnMost' value='Color with Most' onclick='vMost()'/></td> </tr>";
            strHTML += "<tr> <td colspan='8' style='text-align:center'> <textarea id='taOut' rows='10' cols='40'></textarea></td> </tr>";
            strHTML += "<table>";


            //Insert strHTML into a form.
            document.getElementById('frmGrid').innerHTML = strHTML;
        }

        function vClickSquare(iRow, iCol)
        {
            var strID, i, j;
            for(i = iRow-1; i<=iRow+1; i++)
                for(j = iCol-1; j<=iCol+1; j++)
                    if (i >= 0 && i <= 7 && j >= 0 && j <= 7)
                    {
                        strID = 'square' + i + "," + j;
                        document.getElementById(strID).src = aiColor[iRow][iCol] + '.jpg';
                        aiColor[i][j] = aiColor[iRow][iCol];
                    }            
        }

        function vMost()
        {
            var strID;
            var afColor = new Array


            for (i = 0; i < 8; i++)
            {
                strID = "img" + i + "," + iCol;
                if (astrColor[iRow][iCol] == 'b')
                    iCount0++
                if (astrColor[iRow][iCol] == 'r')
                    iCount1++
                if (astrColor[iRow][iCol] == 'o')
                    iCount2++
                if (astrColor[iRow][iCol] == 'y')
                    iCount3++
                if (astrColor[iRow][iCol] == 'bl')
                    iCount4++
                if (astrColor[iRow][iCol] == '')
                    iCount5++
                if (astrColor[iRow][iCol] == 'b')
                    iCount6++
                if (astrColor[iRow][iCol] == 'b')
                    iCount7++
            }
        }