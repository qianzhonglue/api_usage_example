import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import ApiUsage from "@/pages/ApiUsage.vue";

const routes = [{
    path: "/",
    component: DashboardLayout,
    redirect: "/api",
    children: [{
        path: "api",
        name: "Api Demonstration",
        component: ApiUsage
    }]
}];

export default routes;