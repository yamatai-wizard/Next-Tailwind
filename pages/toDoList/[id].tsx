import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const ToDoDetail = () => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;

  const [toDoItemTitle, setToDoItemTitle] = useState("");
  const [toDoItemMemo, setToDoItemMemo] = useState("");
  const [toDoItemDate, setToDoItemDate] = useState("");

  useEffect(() => {
    if (id) {
      const toDoListStr = localStorage.getItem("toDoList");
      if (toDoListStr) {
        const toDoList = JSON.parse(toDoListStr);
        const toDoItem = toDoList.find((todo) => todo.id === id);
        setToDoItemTitle(toDoItem.title);
        setToDoItemMemo(toDoItem.memo);
        setToDoItemDate(toDoItem.date);
      }
    }
  }, [id]);

  const editToDo = (toDoTitle, toDoMemo, toDoDate) => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    const newToDoList = toDoList.map((toDoItem) => {
      if (toDoItem.id === id) {
        toDoItem.title = toDoTitle;
        toDoItem.memo = toDoMemo;
        toDoItem.date = toDoDate;
      }
      return toDoItem;
    });
    setToDoItemTitle(toDoTitle);
    setToDoItemTitle(toDoMemo);
    setToDoItemTitle(toDoDate);
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          編集ページ
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                タイトル
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  autoFocus={true}
                  placeholder="新規タイトル"
                  value={toDoItemTitle}
                  onChange={(e) => setToDoItemTitle(e.target.value)}
                ></input>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                メモ
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  autoFocus={true}
                  placeholder="新規メモ"
                  value={toDoItemMemo}
                  onChange={(e) => setToDoItemMemo(e.target.value)}
                ></input>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                日付
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  autoFocus={true}
                  placeholder="新規日付"
                  value={toDoItemDate}
                  onChange={(e) => setToDoItemDate(e.target.value)}
                ></input>
              </div>
            </div>

            <div>
              <Link href="http://localhost:3000/toDoList">
                <button
                  type="button"
                  className="flex w-full mt-5 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => {
                    editToDo(toDoItemTitle, toDoItemMemo, toDoItemDate);
                  }}
                >
                  編集
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToDoDetail;
