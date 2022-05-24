type BannerInfo = {
    "banner": string
    "url": string
    "tag": string
}


//JSONを日付やIdによって入れ替える
const GeneratingSortedArray = (BannerInfos: Array<BannerInfo>,dataOffSet: number, dataId: number) => {
    //配列のコピーを作って、コピー配列で処理する
    let copyBannerInfoArrays = BannerInfos.slice();
    //日付と表示番号の合計値から配列を理想の形に入れ替える
    if (dataId || dataOffSet) {
        const arrayOrderChangeNumber = (dataId + dataOffSet) * 3;
        for (let i = 0; i < arrayOrderChangeNumber; i++) {
            copyBannerInfoArrays.push(copyBannerInfoArrays[0]);
            copyBannerInfoArrays.shift();
        }
    }
    return copyBannerInfoArrays;
}

//理想のDOMを生成
const GeneratingIdealDomHierarchy = (copyBannerInfoArrays: Array<BannerInfo>) => {
    const table:HTMLElement = document.createElement("table");
    table.setAttribute("width", "85%");
    table.setAttribute("border", "0")
    table.setAttribute("cellspacing", "0");
    table.setAttribute("cellpadding", "0");
    const tbody:HTMLElement = document.createElement("tbody");
    const tr:HTMLElement = document.createElement("tr");
    tbody.appendChild(tr);
    const td:HTMLElement = document.createElement("td");
    td.setAttribute("align", "CENTER");
    td.setAttribute("valign", "TOP");
    td.setAttribute("width", "100%");
    tr.appendChild(td);
    const hr = document.createElement("hr");
    td.appendChild(hr);
    //JSONのデータにtagがあるとき、そのままタグを使う。
    if (copyBannerInfoArrays[0].tag !== "") {
        td.innerHTML += copyBannerInfoArrays[0].tag;
    } else {
        //JSONのデータによってtagが無いとき、aタグとimgタグを一から作る
        const a:HTMLElement = document.createElement("a");
        a.setAttribute("href", copyBannerInfoArrays[0].url)
        td.appendChild(a);
        const img:HTMLElement = document.createElement("img");
        img.setAttribute("src", copyBannerInfoArrays[0].banner);
        a.appendChild(img)
    }
    table.appendChild(tbody);
    return table;
}

window.onload = () => {
    const url: string = './sample.json'
    $.getJSON(url, (BannerInfos: Array<BannerInfo> ) => {
        //指定DOM取得
        const jsRotationBannerElements: Element[] = Array.from(document.getElementsByClassName("js-rotation-banner"));
        //指定DOM分ループで処理
        jsRotationBannerElements.forEach((element: Element) => {
            //何個表示させるかの値取得
            const displayIsNumber: number = Number(element.getAttribute("data-quantity"));
            //JSONの順番を入れ替えて表示するbannerを入れ替える
            const dataOffSet: number = Number(element.getAttribute("data-offset"));
            const dataId:number = Number(element.getAttribute("data-id"));
            //入れ替えられたJSONを取得
            let copyBannerInfoArrays = GeneratingSortedArray(BannerInfos, dataOffSet, dataId);
            //何個表示させるかの値をつかってループする。(理想DOM生成)
            for (let i = 0; i < displayIsNumber; i++) {
                //生成されたDOMを代入
                const table:HTMLElement = GeneratingIdealDomHierarchy(copyBannerInfoArrays);
                element.appendChild(table);
                //配列の要素を一つずらして次のループを正常に行えるようにする。
                copyBannerInfoArrays.push(copyBannerInfoArrays[0]);
                copyBannerInfoArrays.shift();
            }
            //コピー配列を初期化
            copyBannerInfoArrays = []
        })
    });
}