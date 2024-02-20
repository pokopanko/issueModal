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
