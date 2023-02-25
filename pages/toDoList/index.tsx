import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Link from "next/link";

const toDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoMemo, setToDoMemo] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  useEffect(() => {
    const toDoList = localStorage.getItem("toDoList");
    if (toDoList) {
      setToDoList(JSON.parse(toDoList));
    }
  }, []);

  const addToDo = () => {
    const newToDo = {
      id: uuid(),
      title: toDoTitle,
      memo: toDoMemo,
      date: toDoDate,
    };
    const newToDoList = [...toDoList, newToDo];
    setToDoList(newToDoList);
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    setToDoTitle("");
    setToDoMemo("");
    setToDoDate("");
  };

  const deleteToDo = (toDoID) => {
    const newToDoList = toDoList.filter((toDoItem) => toDoItem.id !== toDoID);
    setToDoList(newToDoList);
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            To Do リスト
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            忘れないようにリマインダーをセットしましょう！
          </p>
        </div>
        <input
          className="shadow appearance-none border rounded w-100% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          autoFocus={true}
          type="text"
          placeholder="新規リマインダー"
          value={toDoTitle}
          onChange={(e) => setToDoTitle(e.target.value)}
        />
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={addToDo}
            type="button"
            className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            追加
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      タイトル
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      メモ
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      日付
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {toDoList.map((toDoItem) => (
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {toDoItem.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {toDoItem.memo}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {toDoItem.date}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <span className="isolate inline-flex rounded-md shadow-sm">
                          <Link href={`/toDoList/${toDoItem.id}`}>
                            <button
                              type="button"
                              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-black-500 focus:outline-none focus:ring-1 focus:ring-black-500"
                            >
                              編集
                            </button>
                          </Link>

                          <button
                            type="button"
                            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-gray-50 focus:z-10 focus:border-black-500 focus:outline-none focus:ring-1 focus:ring-black-500"
                            onClick={() => {
                              deleteToDo(toDoItem.id);
                            }}
                          >
                            削除
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default toDo;
