


        //global variable to keep track of whther or not ther is a decimal
        var bDecimal = false;
        //global variable to keep track of whther or not ther is a negative sign
        var bNeg = false;
        //global variable to keep tack of the first number
		var fFirstNum = 0;
		//global variable to keep track of the operastion pressed
		var strOp = '';
		//global variable to keep track of the last button pressed (num or op)
		var strLast = '';
		//global variable to store second number of operation
		var fSecondNum = 0;
        function vNumber(strNum)
		{
			if(strLast == 'N')
			{
				if (strNum == '-' && !bNeg)
				{
					document.getElementById('txtInput').value = strNum + document.getElementById('txtInput').value;
					bNeg = true;
				}
				else if (strNum != '-') {
					//if there isnt already a decimal point then add to the value
					//if the value to add on is not a decimal point then add it on
					//booleans are true unless defined as false, can put !bDecimal to make false
					if (bDecimal == false || (bDecimal && strNum != '.'))
						document.getElementById('txtInput').value += strNum;
					//if i had a decimal point change bDecimal to true
					if (strNum == '.')
						bDecimal = true
				}
			}
				else
				{
					document.getElementById('txtInput').value = strNum;
					if (bNeg == true)
						bNeg = false;
					if(bDecimal == true)
                		bDecimal = false;
					strLast = 'N';
				}
        }
            function vClearE()
            {
                var strNum1
                strNum1 = document.getElementById('txtInput').value;
                document.getElementById('txtInput').value = '';
                if (bNeg == true)
                    bNeg = false;
                if (bDecimal == true)
                	bDecimal = false;
            }
		//function called when an op button is pressed
		function vOp(strOpPressed)
		{
			fFirstNum = parseFloat(document.getElementById('txtInput').value);
			strOp = strOpPressed;
			strLast = 'O';
		}
		
		//function called when enter button is pressed to do calulations
		function vEnter()
		{
		    if (strLast == 'E')
		        fFirstNum = parseFloat(document.getElementById('txtInput').value);
		    else
		        fSecondNum = parseFloat(document.getElementById('txtInput').value);
		    

		 
		    if (strOp != '')
		    {
                var fAns = 0;
		        if (strOp == '+')
		            fAns = fFirstNum + fSecondNum;
		        else if (strOp == '-')
		            fAns = fFirstNum - fSecondNum;
		        else if (strOp == '/')
		            fAns = fFirstNum / fSecondNum;
		        else if (strOp == 'x')
		            fAns = fFirstNum * fSecondNum;

		        document.getElementById('txtInput').value = fAns;
		        document.getElementById('taOut').value += fFirstNum + ' ' + strOp + ' ' + fSecondNum + ' ' + '=' + ' ' + fAns + '\r';
		    }
			

			strLast = 'E'
		}

		function vClear()
		{
		    document.getElementById('txtInput').value = '';
		    document.getElementById('taOut').value = '';
            bDecimal = false;
            bNeg = false;
            fFirstNum = 0;
            strOp = '';
            strLast = '';
            fSecondNum = 0;
		}