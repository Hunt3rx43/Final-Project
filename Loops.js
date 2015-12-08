		function iNumCheck(strNum)
		{
			var iNum;
			if(isNaN(strNum) || parseInt(strNum) < 0 || parseFloat(strNum) % 1 != 0)
				iNum = 0;
			else
				iNum = parseInt(strNum);
			return iNum;
		}


		function vCount()
        {
            document.getElementById('taOut').value = '';

            var iNumber = iNumCheck(document.getElementById('txtInt1').value);

            var i
            for (i = 1; i <= iNumber; i++)
                document.getElementById('taOut').value += i + ' ';
        }


        function vDraw()
        {
            document.getElementById('taOut').value = '';

            var iNumber = iNumCheck(document.getElementById('txtInt2').value);

            var i
            for (i = 1; i <= iNumber; i++)
                document.getElementById('taOut').value += 'A' + ' ';
        }


        function vCount2()
        {
            document.getElementById('taOut').value = '';

            var iCount1 = iNumCheck(document.getElementById('txtInt3').value);
            var iCount2 = iNumCheck(document.getElementById('txtInt4').value);

			if (iCount1 != 0 && iCount2 != 0)
			{
				var i
				var iSum = 0;
				for(i = iCount1; i <= (iCount1*iCount2) ; i += iCount1)
				{
					document.getElementById('taOut').value += i + ' ';
					iSum += i;
				}
				document.getElementById('taOut').value += '\r The sum of these numbers is ' + iSum;
			}
        }


        function vCountDown()
        {
            document.getElementById('taOut').value = '';

            var iNumber = iNumCheck(document.getElementById('txtInt5').value);

            var i
            for (i = iNumber; i >= 1; i--)
                document.getElementById('taOut').value += i + ' ';
        }


		function vFibonacci()
		{
			document.getElementById('taOut').value = '';

            var iNumber = iNumCheck(document.getElementById('txtInt6').value);
			var iNum1 = 1;
			var iNum2 = 1;
			var iNum3;

			var i;
			for(i = 1; i <= iNumber; i ++)
			{
				if (i == 1)
					document.getElementById('taOut').value = iNum1;
				else if (i == 2)
					document.getElementById('taOut').value += ' ' + iNum2;
				else
				{
					iNum3 = iNum1 + iNum2;
					document.getElementById('taOut').value += ' ' + iNum3;
					iNum1 = iNum2;
					iNum2 = iNum3;
				}
			}
		}


		function vPrime()
		{
			document.getElementById('taOut').value = '';

            var iNumber = iNumCheck(document.getElementById('txtInt7').value);

			if (iNumber > 1)
			{
				
				var i
				var iCount = 0;

				for (i = 1; i <= iNumber; i++)
				{	
					if (iNumber % i == 0)
						iCount++;
				}

				if (iCount == 2)
					document.getElementById('taOut').value += 'Yeah, Bruh it is Prime';
				else
					document.getElementById('taOut').value += 'Nah, Bruh it is not Prime';
			}
		}
        

		function vFactorial()
		{
		    document.getElementById('taOut').value = '';

		    var iNumber = iNumCheck(document.getElementById('txtInt8').value);

		    var i
		    var iFactor = 1;
		    for (i = 1; i <= iNumber; i++)
		        iFactor = iFactor * i;
		    document.getElementById('taOut').value = iNumber + '!' + ' = ' + iFactor
		}


		function vFactor()
		{
		    document.getElementById('taOut').value = '';

		    var iNumber = iNumCheck(document.getElementById('txtInt9').value);

		    var i

		    document.getElementById('taOut').value += 'The factors of ' + iNumber + ' are: \r';

		    for(i = 1; i <= iNumber; i++) 
		    {
		        if(iNumber % i == 0) 
		        {
		            document.getElementById('taOut').value += i + '\r';
		        }
            }
		}
    

		function vPowerOf()
		{
		    document.getElementById('taOut').value = '';

		    var iNumber = iNumCheck(document.getElementById('txtInt10').value);
		    
		    if (iNumber > 0)
		    {
		        var iExpo = 0;
		        while (iNumber >= Math.pow(2, iExpo))
		        {
		            iExpo++;
		        }
		        document.getElementById('taOut').value = 'The highest power of 2, less than or equal to ' + iNumber + ' is 2^' + (iExpo-1) + '.';
		    }
		}


		function vRandom()
		{
		    document.getElementById('taOut').value = '';

		    var iNumber1 = iNumCheck(document.getElementById('txtInt11').value);
		    var iNumber2 = iNumCheck(document.getElementById('txtInt12').value);

		    if (iNumber1 > 1 && iNumber2 > 1 && iNumber2 <= iNumber1)
		    {
		        var iRanNum;
		        var iRanCount = 0;
                iRanCount = parseFloat(iRanCount)
		        do
		        {
		            iRanNum = Math.floor(Math.random() * iNumber1) + 1;
		            document.getElementById('taOut').value += iRanNum + ' ';
                    iRanCount++
		        } while (iRanNum != iNumber2)

                document.getElementById('taOut').value += '\r' + 'There were ' + iRanCount + ' numbers generated to get the # ' + iNumber2
            }
		}


		function vGCF()
		{
		    document.getElementById('taOut').value = '';

		    var iNumber1 = iNumCheck(document.getElementById('txtInt13').value);
		    var iNumber2 = iNumCheck(document.getElementById('txtInt14').value);

		    if (iNumber1 > 0 && iNumber2 > 0)
		    {
		        var iRem
		        do
		        {
		            iRem = iNumber1 % iNumber2;
		            iNumber1 = iNumber2;
		            iNumber2 = iRem;
		        } while (iRem != 0);

		        document.getElementById('taOut').value = 'The GCF of these two numbers is ' + iNumber1 + '.'
		    }
		}

		function vRan2()
		{
		    document.getElementById('taOut').value = '';

		    var iRow = iNumCheck(document.getElementById('txtInt15').value);
		    var iCol = iNumCheck(document.getElementById('txtInt16').value);

            var i, j

		    if (iRow > 0 && iRow < 10 && iCol > 0 && iCol < 10)
		    {
		        for(i = 1; i <= iRow; i++)
                {
		            for (j = 1; j <= iCol; j++)
		                document.getElementById('taOut').value += '* ';
                    document.getElementById('taOut').value += '\r';
		        }
		        
		    }
		}

		function vArray()
		{
		    document.getElementById('taOut').value = '';

		    var iRow = iNumCheck(document.getElementById('txtInt17').value);
		    var iCol = iNumCheck(document.getElementById('txtInt18').value);

		    var i, j

		    if (iRow > 0 && iRow < 10 && iCol > 0 && iCol < 10)
		    {
		        for (i = 1; i <= iRow; i++)
		        {
		            for (j = 1; j <= iCol; j++)
		                document.getElementById('taOut').value += i + ',' + j + ' ';
		            document.getElementById('taOut').value += '\r';
		        }

		    }
		}

		function vRit()
		{
		    document.getElementById('taOut').value = '';

		    var iRit = iNumCheck(document.getElementById('txtInt19').value);
		    
		    var i, j

		        for (i = 1; i <= iRit; i++)
		        {
		            for (j = 1; j <= i; j++)
		                document.getElementById('taOut').value += '* ';
		            document.getElementById('taOut').value += '\r';
		        }
		}

		function vTriOut()
		{
		    document.getElementById('taOut').value = '';

		    var iTri = iNumCheck(document.getElementById('txtInt20').value);

		    var i, j, s;


		    for (i = 1; i <= 1; i++)
		    {
		        for (s = 1; s <= (iTri - i) ; s++)
		            document.getElementById('taOut').value += ' ';
		        for (j = 1; j <= 2 * i - 1; j++)
		            document.getElementById('taOut').value += '*';
		        document.getElementById('taOut').value += '\r';
		    }

		    for (i = 2; i <= iTri-1; i++)
		    {
		        for (s = 1; s <= (iTri - i) ; s++)
		            document.getElementById('taOut').value += ' ';
		        document.getElementById('taOut').value += '*';
		        for (j = 2; j <= (2*i)-2; j++)
		            document.getElementById('taOut').value += ' ';
		        document.getElementById('taOut').value += '*';
		        document.getElementById('taOut').value += '\r';
		    }

		    for (i = iTri; i <= iTri; i++) 
            {
		        for (s = 1; s <= (iTri - i) ; s++)
		            document.getElementById('taOut').value += ' ';
		        for (j = 1; j <= 2 * i - 1; j++)
		            document.getElementById('taOut').value += '*';
		        document.getElementById('taOut').value += '\r';
		    }
		}

		function vSideTri()
		{
		    document.getElementById('taOut').value = '';

		    var iSTri = iNumCheck(document.getElementById('txtInt21').value);

		    var i, j, n;

		    for (i = 1; i <= iStri; i++)
		    {
		        for (j = 1; j <= i; j++)
		            document.getElementById('taOut').value += '* ';
                document.getElementById('taOut').value += '\r';
		    }
		    for (i = 1; i <= (iSTri-1); i++)
            {
		        for (j = 1; j <= (iStri-i); j++)
		            document.getElementById('taOut').value += '* ';
		        document.getElementById('taOut').value += '\r';
            }
		}

		function vUpTri() {
		    document.getElementById('taOut').value = '';

		    var iUpTri = iNumCheck(document.getElementById('txtInt22').value);

		    var i, j, s;

		    for (i = 1; i <= iUpTri; i++)
		    {
		        for (s = 1; s <= (iUpTri-i); s++)
		            document.getElementById('taOut').value += '  ';
		        for (j = 1; j <= 2*i-1; j++)
		            document.getElementById('taOut').value += '* ';
		        document.getElementById('taOut').value += '\r';
		    }
		}

		function vLRit()
		{
		    document.getElementById('taOut').value = '';

		    var iUpTri = iNumCheck(document.getElementById('txtInt23').value);

		    var i, j, s;

		    for (i = 1; i <= iUpTri; i++)
		    {
		        for (s = 1; s <= (iUpTri - i) ; s++)
		            document.getElementById('taOut').value += '  ';
		        for (j = 1; j <= i; j++)
		            document.getElementById('taOut').value += '* ';
		        document.getElementById('taOut').value += '\r';
		    }
		}