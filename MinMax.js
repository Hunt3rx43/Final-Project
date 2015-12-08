        function vMax(fNum1, fNum2, fNum3)
		{
            fNum1 = parseFloat(fNum1)
            fNum2 = parseFloat(fNum2)
            fNum3 = parseFloat(fNum3)
            var fMax = fNum1
            if (fNum2 > fMax)
                fMax = fNum2
            if (fNum3 > fMax)
                fMax = fNum3
            
            document.getElementById('txtAns').value = 'The max is ' + fMax
        }
        function vMin(fNum1, fNum2, fNum3)
        {
            fNum1 = parseFloat(fNum1)
            fNum2 = parseFloat(fNum2)
            fNum3 = parseFloat(fNum3)
            var fMin = fNum1
            if (fNum2 < fMin)
                fMin = fNum2
            if (fNum3 < fMin)
                fMin = fNum3

            document.getElementById('txtAns').value = 'The min is ' + fMin
        }