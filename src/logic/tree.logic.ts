import { FileInfo, Node } from "../common/type/treeType";

/**
 * 各ファイル情報ごとに
 * ・リンクをスラッシュ (/) で分割し、各パーツを取得します。
 * ・親ノードをルートノードに設定します。
 * ・各フォルダ名ごとに
 * 　・親の名前が空の場合は、パーツそのものがパスを表します。それ以外の場合は、親の名前とパーツを結合してパスを作成します。
 * 　・作成したパスが map に存在しない場合は、新しいノードを作成し map に追加します。そして、親ノードの子ノードとして新しいノードを追加します。
 * 　・作成したパスが map に存在する場合は、既存のノードを取得します。
 * ・最後に、ファイル情報の名前を親ノードの子ノードとして追加します。
 * @param data
 * @returns
 */
export const sortFoldersAndFiles = (data: FileInfo[]): Node[] => {
  const root: Node = { name: "" };
  const map: { [link: string]: Node } = { "": root };

  //  同じフォルダ内のファイルとフォルダをまとめる
  data.sort((a, b) => {
    if (a.link !== b.link) return a.link.localeCompare(b.link);
    return a.name.localeCompare(b.name);
  });
  console.log("data<", data);

  data.forEach((fileInfo) => {
    const { link, name } = fileInfo;
    const parts = link.split("/");
    let parent = root;

    parts.forEach((part) => {
      const path = parent.name === "" ? part : `${parent.name}/${part}`;
      if (!map[path]) {
        const node: Node = { name: part };
        map[path] = node;
        if (!parent.children) parent.children = [];
        parent.children.push(node);
      }
      parent = map[path];
    });

    if (!parent.children) parent.children = [];
    parent.children.push({ name });
  });

  return root.children ?? [];
};

interface ErrType {
  name: string;
  data: number;
  err_id: number[];
}

export const Errdata: ErrType[] = [
  {
    name: "test1",
    data: 123,
    err_id: [10, 7, 3],
  },
  {
    name: "test2",
    data: 10,
    err_id: [1, 5, 7],
  },
  {
    name: "testA",
    data: 52,
    err_id: [2, 5, 1, 3],
  },
];

export const groupData = (data: ErrType[]) => {
  // 各err_idごとにErr_Typeのままデータを格納
  const groupedData: { [key: number]: { name: string; children: ErrType[] } } = {};
  data.forEach((item) => {
    item.err_id.forEach((id) => {
      if (!groupedData[id]) {
        // groupedData[id] = [];
        groupedData[id] = {
          name: `Err_${id}`,
          children: [],
        };
      }
      groupedData[id].children.push(item);
    });
  });

  // err_idでソート
  const sortedKeys = Object.keys(groupedData).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );
  const sortedData = sortedKeys.map((errId) => {
    const { name, children } = groupedData[parseInt(errId)];
    convert(children)
    return { name, children };
  });  
  console.log("sortedData",sortedData)

  function convert(data: ErrType[]) {
    // 何らかの処理
    console.log("data>>>", data);
  }
};
