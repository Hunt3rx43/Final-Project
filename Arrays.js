        var afNums = new Array;

        var iEltNum = 0;

        function vEnter()
        {
            var fInput = document.getElementById('txtNum1').value;

            if (!isNaN(fInput))
            {
                afNums[iEltNum] = parseFloat(fInput);
                iEltNum++;
                document.getElementById('taOut').value += fInput + ' ';
            }
        }

        function vClear()
        {
            document.getElementById('txtNum1').value = '';
            document.getElementById('taOut').value = '';
            document.getElementById('txtNum2').value = '';
            document.getElementById('txtNum3').value = '';
            var i;
            for (i = 0; i < iEltNum; i++)
                afNums[i] = '';
            iEltNum = 0;
        }

        function vRandom()
        {
			document.getElementById('taOut').value = '';
			var iMany = document.getElementById('txtNum2').value;
            var iMax = document.getElementById('txtNum3').value;

            iEltNum = 0;
            
            var i;
            for (i = 0; i < iMany; i++)
            {
                afNums[i] = Math.floor(Math.random() * iMax) + 1;
                document.getElementById('taOut').value += afNums[i] + ' ';
                iEltNum++;
            }
            document.getElementById('taOut').value += '\r'
        }

        function fMinNum()
        {
            var fMin = afNums[0];
            var i;
            
            for (i = 1; i < iEltNum; i++)
                if (afNums[i] < fMin)
                    fMin = afNums[i];
            return fMin;
        }

        function fMaxNum() {
            var fMax = afNums[0];
            var i;

            for (i = 1; i < iEltNum; i++)
                if (afNums[i] > fMax)
                    fMax = afNums[i];
            return fMax;
        }

        function fSumNum()
        {
            var fSum = afNums[0];
            var i;

            for (i = 1; i < iEltNum; i++)
                fSum += afNums[i];
            return fSum;
        }

        function fRange()
        {
            return (fMaxNum() - fMinNum());
        }

        function fMean()
        {
			return (fSumNum() / iEltNum)
        }

        function fStanDev()
        {
        	var fMeanVal = fMean();
			var fSumDev = 0;
			var i;

			for (i = 1; i < iEltNum; i++)
				fSumDev += Math.pow((afNums[i] - fMeanVal), 2);

			return (Math.sqrt(fSumDev / (iEltNum -1)))
        }

        function vSearch()
        {
            var iCount = 0;
            var iNum = document.getElementById('txtNum4').value;

            for (var i = 0; i <= iEltNum; i++)
            {
                if (afNums[i] == iNum)
                    iCount++;
            }
		if(iCount == 1)
			document.getElementById('taOut').value += '\r There is ' + iCount + ' ' + iNum + " in the array.";
        else if(iCount < 1 || iCount > 1)
			document.getElementById('taOut').value += '\r There are ' + iCount + ' ' + iNum + "'s in the array.";
			
        }

        function vLEven()
        {
            var fMaxE = afNums[0];
            var i;

            for (i = 1; i < iEltNum; i++)
                if (afNums[i] % 2 == 0)
                    if (afNums[i] > fMaxE)
                        fMaxE = afNums[i];
            document.getElementById('taOut').value += 'The largest even number in the array is ' + fMaxE;
        }