		var strScore = 0;

        var iScoreCount = 0;

        iNumber = 0;

        var iCharCount = 0;

        var strChar = '';
        function vGrade()
        {
            document.getElementById('txt1').value = 'A';
            document.getElementById('txt2').value = 'B';
            document.getElementById('txt3').value = 'C';
            document.getElementById('txt4').value = 'Cats, Dogs, Fish';
            document.getElementById('txt5').value = '19';

            if (document.getElementById('rbJames').checked)
                iScoreCount += 1;
            if (document.getElementById('rbHolyoke').checked)
                iScoreCount += 1;
            if (document.getElementById('rbBasketball').checked)
                iScoreCount += 1;
            if (document.getElementById('cbCat').checked)
                iScoreCount += 1;
            if (document.getElementById('cbDog').checked)
                iScoreCount += 1;
            if (document.getElementById('cbFish').checked)
                iScoreCount += 1;
            if (document.getElementById('AgeMenu').value == 19)
                iScoreCount += 1;

            document.getElementById('txtScore').value = iScoreCount
        }

        function vSubmit()
        {
            iCharCount = 0;
            iNumber = 0;
            strChar = '';
            vTotalCharCount();
            vChar('cbCheer');
            vChar('cbMean');
            vChar('cbHelp');
            vChar('cbImpatient');
            vChar('cbLoud');
            vChar('cbAwesome');
            vChar('cbAnnoy');
            vChar('cbIncon');

            document.getElementById('txtSub').value = 'You think that I am ' + strChar;
        }
            function vTotalCharCount()
            {
            if (document.getElementById('cbCheer').checked)
                iCharCount += 1
            if (document.getElementById('cbMean').checked)
                iCharCount += 1
            if (document.getElementById('cbHelp').checked)
                iCharCount += 1
            if (document.getElementById('cbImpatient').checked)
                iCharCount += 1
            if (document.getElementById('cbLoud').checked)
                iCharCount += 1
            if (document.getElementById('cbAwesome').checked)
                iCharCount += 1
            if (document.getElementById('cbAnnoy').checked)
                iCharCount += 1
            if (document.getElementById('cbIncon').checked)
                iCharCount += 1
            }
            function vChar(strCharId)
            {
                if (document.getElementById(strCharId).checked)
                {
                    iNumber += 1;
                    if (iNumber < (iCharCount - 1))
                        strChar += document.getElementById(strCharId).value + ', ';
                    else if (iNumber == (iCharCount - 1) && (iCharCount != 2))
                        strChar += document.getElementById(strCharId).value + ', and ';
                    else if ((iCharCount == 2) && (iNumber == (iCharCount - 1)))
                        strChar += document.getElementById(strCharId).value + ' and ';
                    else
                        strChar += document.getElementById(strCharId).value;
                }
            }