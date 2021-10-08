import { ref } from "vue";

window.URL = window.URL || window.webkitURL;

// 讀取本地資料
const useImageFilePreview = (file) => {
  return window.URL.createObjectURL(file);
};

// 本地預覽
const useQueuePreview = (fileArr) => {
  // 多圖多影片列表
  const previewMap = {};

  // 排序索引
  let idx = 0;
  for (const file of fileArr) {
    const fileData = useImageFilePreview(file);
    previewMap[idx] = fileData;
    idx++;
  }

  return previewMap;
};

export function useFileUpate() {
  // 預覽用檔案
  const previewMap = ref({});

  // Init
  const initData = () => {
    previewMap.value = {};
  };

  // 選擇多個檔案
  const setFile = async (file = []) => {
    initData();
    previewMap.value = useQueuePreview(file);
    console.log(previewMap.value);
  };

  return { setFile, previewMap };
}
