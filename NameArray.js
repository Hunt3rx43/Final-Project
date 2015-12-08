        var astrNames = new Array;
        var iEltNum = 0;


        function vEnter()
        {
            var strName = document.getElementById('txtName1').value;

            astrNames[iEltNum] = strName;

            document.getElementById('taOut').value += strName + ' ';

            iEltNum++;

            document.getElementById('txtName1').value = '';
        }

        function vClear()
        {
            var i;
            for (i = 0; i < iEltNum; i++)
                astrNames[i] = '';

            document.getElementById('txtName1').value = '';
            document.getElementById('taOut').value = '';

            iEltNum = 0;
        }

        function vSearchFL()
        {
            var iCount = 0;
            var strListNames = '';

            var strLetter = document.getElementById('txtLetter').value;

            var i;
            for (i = 0; i < iEltNum; i++)
                if (astrNames[i].charAt(0).toLowerCase() == strLetter.toLowerCase())
                {
                    iCount++;
                    strListNames += astrNames[i] + ' ';
                }
            if(iCount < 1 || iCount > 1)
                document.getElementById('taOut').value += '\rThere are ' + iCount + ' names that start with the letter ' + strLetter + '. Those names are: ' + strListNames + '.';
            else
                document.getElementById('taOut').value += '\rThere is ' + iCount + ' name that starts with the letter ' + strLetter + '. That name is: ' + strListNames + '.';
        }

        function vSearchLeng()
        {
            var iCount = 0;
            var strListNames = '';

            var strLength = document.getElementById('txtLength').value;

            var i;
            for (i = 0; i < iEltNum; i++)
                if (astrNames[i].length == strLength)
                {
                    iCount++;
                    strListNames += astrNames[i] + ' ';
                }
            if (iCount < 1 || iCount > 1)
                document.getElementById('taOut').value += '\rThere are ' + iCount + ' names that are ' + strLength + ' letters long. Those names are: ' + strListNames + '.';
            else
                document.getElementById('taOut').value += '\rThere is ' + iCount + ' name that is ' + strLength + ' letters long. That name is: ' + strListNames + '.';
        }

		function vSearchLF()
		{
			var iCount = 0;

            var strFLetter = document.getElementById('txtFLetter').value;

			var i;
            for (i = 0; i < iEltNum; i++)
                if (astrNames[i].charAt().toLowerCase() == strFLetter.toLowerCase())
                {
                    iCount++;
                }

			if(iCount < 1 || iCount > 1)
                document.getElementById('taOut').value += '\rThere are ' + iCount + ' ' + strFLetter + '\'s total in all the names.';
            else
                document.getElementById('taOut').value += '\rThere is ' + iCount + ' ' + strFLetter + ' total in all the names.';
		}