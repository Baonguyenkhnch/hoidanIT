# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- 
✅ Import useState từ React
✅ Import các component TodoNew và TodoData
✅ Thêm state todoList để quản lý danh sách todo
✅ Tạo function addNewtodo để thêm todo mới
✅ Tạo function deleteTodo để xóa todo
✅ Sử dụng đúng các component thay vì HTML thuần
🎨 todo.css:
✅ Thêm style cho .todo-item để hiển thị đẹp
✅ Style cho button DELETE với màu đỏ
✅ Thêm hover effects
✅ Style cho demo props
Bây giờ ứng dụng sẽ hoạt động:
✅ Thêm todo: Nhập text vào input và click "Add" → todo mới sẽ xuất hiện
✅ Xóa todo: Click button "DELETE" → todo sẽ bị xóa khỏi danh sách
✅ Hiển thị đẹp: Mỗi todo item có style đẹp với button DELETE màu đỏ -->