import { useNavigate } from "react-router-dom";

function MiniProject() {
    const navigate = useNavigate();
  return (
    <div><h1 style={{textAlign:"center"}}>MiniProject</h1>

    <table border={2} cellPadding={2} cellSpacing={2}>
        <thead>
            <tr>
                <th>
                    NAME & REPO LINK
                </th>
                <th>
                    LIVE PROJECT LINK
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XStopwatch.git">XStopwatch</a></td>
                <td><a href="https://x-stopwatch-xi.vercel.app/">https://x-stopwatch-xi.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XDisplayName.git">XDisplayName</a></td>
                <td><a href="https://x-display-name-tan.vercel.app/">https://x-display-name-tan.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XCounter/tree/main/xcounter">XCounter</a></td>
                <td><a href="https://x-counter-drab.vercel.app/">https://x-counter-drab.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XCalculator/tree/main/xcalculator">XCalculator</a></td>
                <td><a href="https://x-calculator-six.vercel.app/">https://x-calculator-six.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XCountries/tree/main/xcountries">XCountries</a></td>
                <td><a href="https://x-countries-alpha.vercel.app/">https://x-countries-alpha.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XLogin/tree/main/xlogin">XLogin</a></td>
                <td><a href="https://x-login-lac.vercel.app/">https://x-login-lac.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XStates/tree/main/xstates">XStates</a></td>
                <td><a href="https://x-states-amber.vercel.app/">https://x-states-amber.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XClassComp/tree/main/xclasscomp">XClassCompCounter</a></td>
                <td><a href="https://x-class-comp-ochre.vercel.app/">https://x-class-comp-ochre.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XPagination/tree/main/xpagination">XPagination</a></td>
                <td><a href="https://x-pagination-red.vercel.app/">https://x-pagination-red.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XWeather/tree/main/xweather">XWeather</a></td>
                <td><a href="https://x-weather-seven.vercel.app/">https://x-weather-seven.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XSpellCheck/tree/main/xspellcheck">XSpellCheck</a></td>
                <td><a href="https://x-spell-check-gold.vercel.app/">https://x-spell-check-gold.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XTable/tree/main/xtable">XTable</a></td>
                <td><a href="https://x-table-brown-nine.vercel.app/">https://x-table-brown-nine.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XModal/tree/main/xmodal">XModal</a></td>
                <td><a href="https://x-modal-snowy-nine.vercel.app/">https://x-modal-snowy-nine.vercel.app/</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/akshaykumar33/XDictionary/tree/main/xdictionary">XDictionary</a></td>
                <td><a href="https://x-dictionary-eta-two.vercel.app/">https://x-dictionary-eta-two.vercel.app/</a></td>
            </tr>
        </tbody>
    </table>
    <br/>
    <button onClick={()=>navigate('/')}>Go To DOCS</button>
    </div>
  )
}

export default MiniProject