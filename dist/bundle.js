/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//JSONを日付やIdによって入れ替える
const GeneratingSortedArray = (BannerInfos, dataOffSet, dataId) => {
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
};
//理想のDOMを生成
const GeneratingIdealDomHierarchy = (copyBannerInfoArrays) => {
    const table = document.createElement("table");
    table.setAttribute("width", "85%");
    table.setAttribute("border", "0");
    table.setAttribute("cellspacing", "0");
    table.setAttribute("cellpadding", "0");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const td = document.createElement("td");
    td.setAttribute("align", "CENTER");
    td.setAttribute("valign", "TOP");
    td.setAttribute("width", "100%");
    tr.appendChild(td);
    const hr = document.createElement("hr");
    td.appendChild(hr);
    //JSONのデータにtagがあるとき、そのままタグを使う。
    if (copyBannerInfoArrays[0].tag !== "") {
        td.innerHTML += copyBannerInfoArrays[0].tag;
    }
    else {
        //JSONのデータによってtagが無いとき、aタグとimgタグを一から作る
        const a = document.createElement("a");
        a.setAttribute("href", copyBannerInfoArrays[0].url);
        td.appendChild(a);
        const img = document.createElement("img");
        img.setAttribute("src", copyBannerInfoArrays[0].banner);
        a.appendChild(img);
    }
    table.appendChild(tbody);
    return table;
};
window.onload = () => {
    const url = './sample.json';
    $.getJSON(url, (BannerInfos) => {
        //指定DOM取得
        const jsRotationBannerElements = Array.from(document.getElementsByClassName("js-rotation-banner"));
        //指定DOM分ループで処理
        jsRotationBannerElements.forEach((element) => {
            //何個表示させるかの値取得
            const displayIsNumber = Number(element.getAttribute("data-quantity"));
            //JSONの順番を入れ替えて表示するbannerを入れ替える
            const dataOffSet = Number(element.getAttribute("data-offset"));
            const dataId = Number(element.getAttribute("data-id"));
            //入れ替えられたJSONを取得
            let copyBannerInfoArrays = GeneratingSortedArray(BannerInfos, dataOffSet, dataId);
            //何個表示させるかの値をつかってループする。(理想DOM生成)
            for (let i = 0; i < displayIsNumber; i++) {
                //生成されたDOMを代入
                const table = GeneratingIdealDomHierarchy(copyBannerInfoArrays);
                element.appendChild(table);
                //配列の要素を一つずらして次のループを正常に行えるようにする。
                copyBannerInfoArrays.push(copyBannerInfoArrays[0]);
                copyBannerInfoArrays.shift();
            }
            //コピー配列を初期化
            copyBannerInfoArrays = [];
        });
    });
    var request = new XMLHttpRequest();
    request.open('GET', 'https://mac.appleple.jp/blog/api/rotation-banner/', true);
    request.responseType = 'json';
    request.onload = function () {
        var data = this.response;
        console.log(data);
    };
    request.send();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYW5uZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vL0pTT07jgpLml6Xku5jjgoRJZOOBq+OCiOOBo+OBpuWFpeOCjOabv+OBiOOCi1xuY29uc3QgR2VuZXJhdGluZ1NvcnRlZEFycmF5ID0gKEJhbm5lckluZm9zLCBkYXRhT2ZmU2V0LCBkYXRhSWQpID0+IHtcbiAgICAvL+mFjeWIl+OBruOCs+ODlOODvOOCkuS9nOOBo+OBpuOAgeOCs+ODlOODvOmFjeWIl+OBp+WHpueQhuOBmeOCi1xuICAgIGxldCBjb3B5QmFubmVySW5mb0FycmF5cyA9IEJhbm5lckluZm9zLnNsaWNlKCk7XG4gICAgLy/ml6Xku5jjgajooajnpLrnlarlj7fjga7lkIjoqIjlgKTjgYvjgonphY3liJfjgpLnkIbmg7Pjga7lvaLjgavlhaXjgozmm7/jgYjjgotcbiAgICBpZiAoZGF0YUlkIHx8IGRhdGFPZmZTZXQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlPcmRlckNoYW5nZU51bWJlciA9IChkYXRhSWQgKyBkYXRhT2ZmU2V0KSAqIDM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPcmRlckNoYW5nZU51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5QmFubmVySW5mb0FycmF5cy5wdXNoKGNvcHlCYW5uZXJJbmZvQXJyYXlzWzBdKTtcbiAgICAgICAgICAgIGNvcHlCYW5uZXJJbmZvQXJyYXlzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvcHlCYW5uZXJJbmZvQXJyYXlzO1xufTtcbi8v55CG5oOz44GuRE9N44KS55Sf5oiQXG5jb25zdCBHZW5lcmF0aW5nSWRlYWxEb21IaWVyYXJjaHkgPSAoY29weUJhbm5lckluZm9BcnJheXMpID0+IHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjg1JVwiKTtcbiAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJib3JkZXJcIiwgXCIwXCIpO1xuICAgIHRhYmxlLnNldEF0dHJpYnV0ZShcImNlbGxzcGFjaW5nXCIsIFwiMFwiKTtcbiAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJjZWxscGFkZGluZ1wiLCBcIjBcIik7XG4gICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xuICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRkLnNldEF0dHJpYnV0ZShcImFsaWduXCIsIFwiQ0VOVEVSXCIpO1xuICAgIHRkLnNldEF0dHJpYnV0ZShcInZhbGlnblwiLCBcIlRPUFwiKTtcbiAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgIHRkLmFwcGVuZENoaWxkKGhyKTtcbiAgICAvL0pTT07jga7jg4fjg7zjgr/jgat0YWfjgYzjgYLjgovjgajjgY3jgIHjgZ3jga7jgb7jgb7jgr/jgrDjgpLkvb/jgYbjgIJcbiAgICBpZiAoY29weUJhbm5lckluZm9BcnJheXNbMF0udGFnICE9PSBcIlwiKSB7XG4gICAgICAgIHRkLmlubmVySFRNTCArPSBjb3B5QmFubmVySW5mb0FycmF5c1swXS50YWc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL0pTT07jga7jg4fjg7zjgr/jgavjgojjgaPjgaZ0YWfjgYznhKHjgYTjgajjgY3jgIFh44K/44Kw44GoaW1n44K/44Kw44KS5LiA44GL44KJ5L2c44KLXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGNvcHlCYW5uZXJJbmZvQXJyYXlzWzBdLnVybCk7XG4gICAgICAgIHRkLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNvcHlCYW5uZXJJbmZvQXJyYXlzWzBdLmJhbm5lcik7XG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuICAgIHJldHVybiB0YWJsZTtcbn07XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9ICcuL3NhbXBsZS5qc29uJztcbiAgICAkLmdldEpTT04odXJsLCAoQmFubmVySW5mb3MpID0+IHtcbiAgICAgICAgLy/mjIflrppET03lj5blvpdcbiAgICAgICAgY29uc3QganNSb3RhdGlvbkJhbm5lckVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtcm90YXRpb24tYmFubmVyXCIpKTtcbiAgICAgICAgLy/mjIflrppET03liIbjg6vjg7zjg5fjgaflh6bnkIZcbiAgICAgICAganNSb3RhdGlvbkJhbm5lckVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIC8v5L2V5YCL6KGo56S644GV44Gb44KL44GL44Gu5YCk5Y+W5b6XXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5SXNOdW1iZXIgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXF1YW50aXR5XCIpKTtcbiAgICAgICAgICAgIC8vSlNPTuOBrumghueVquOCkuWFpeOCjOabv+OBiOOBpuihqOekuuOBmeOCi2Jhbm5lcuOCkuWFpeOCjOabv+OBiOOCi1xuICAgICAgICAgICAgY29uc3QgZGF0YU9mZlNldCA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtb2Zmc2V0XCIpKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJZCA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgLy/lhaXjgozmm7/jgYjjgonjgozjgZ9KU09O44KS5Y+W5b6XXG4gICAgICAgICAgICBsZXQgY29weUJhbm5lckluZm9BcnJheXMgPSBHZW5lcmF0aW5nU29ydGVkQXJyYXkoQmFubmVySW5mb3MsIGRhdGFPZmZTZXQsIGRhdGFJZCk7XG4gICAgICAgICAgICAvL+S9leWAi+ihqOekuuOBleOBm+OCi+OBi+OBruWApOOCkuOBpOOBi+OBo+OBpuODq+ODvOODl+OBmeOCi+OAgijnkIbmg7NET03nlJ/miJApXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlJc051bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy/nlJ/miJDjgZXjgozjgZ9ET03jgpLku6PlhaVcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IEdlbmVyYXRpbmdJZGVhbERvbUhpZXJhcmNoeShjb3B5QmFubmVySW5mb0FycmF5cyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgICAgICAgICAgICAgLy/phY3liJfjga7opoHntKDjgpLkuIDjgaTjgZrjgonjgZfjgabmrKHjga7jg6vjg7zjg5fjgpLmraPluLjjgavooYzjgYjjgovjgojjgYbjgavjgZnjgovjgIJcbiAgICAgICAgICAgICAgICBjb3B5QmFubmVySW5mb0FycmF5cy5wdXNoKGNvcHlCYW5uZXJJbmZvQXJyYXlzWzBdKTtcbiAgICAgICAgICAgICAgICBjb3B5QmFubmVySW5mb0FycmF5cy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy/jgrPjg5Tjg7zphY3liJfjgpLliJ3mnJ/ljJZcbiAgICAgICAgICAgIGNvcHlCYW5uZXJJbmZvQXJyYXlzID0gW107XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCAnaHR0cHM6Ly9tYWMuYXBwbGVwbGUuanAvYmxvZy9hcGkvcm90YXRpb24tYmFubmVyLycsIHRydWUpO1xuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVzcG9uc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH07XG4gICAgcmVxdWVzdC5zZW5kKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9