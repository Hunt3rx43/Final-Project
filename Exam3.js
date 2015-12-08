        var afRanNum = new Array;
        var iEltNum = 0;
        function vCreate()
        {
            document.getElementById('taOut').value = '';
            var i;
            if (afRanNum[i] % 20 == 0)
            {
                for (i = 0; i <= iEltNum; i++)
                {
                    afRanNum[i] = Math.floor(Math.random() * 100) + 1;
                    document.getElementById('taOut').value += afRanNum[i] + ' ';
                    iEltNum++;
                }
            }
        }

        function vAverage()
        {
            var iSum;
            var iAverage;
            var i;

            for (i = 0; i < iEltNum; i++)
                iSum += afNums[i];

            iAverage = (iSum / iEltNum)
            document.getElementById('taOut').value += '\rThe Average is ' + iAverage;
        }