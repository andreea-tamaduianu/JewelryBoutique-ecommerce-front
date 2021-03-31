import {Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, {useEffect, lazy, Suspense} from 'react'


import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import {currentUser} from './functions/auth'
import { LoadingOutlined } from '@ant-design/icons'

const SideDrawer = lazy(()=> import("./components/drawer/SideDrawer"));
const Login = lazy(()=> import('./pages/auth/Login'))
const Register = lazy(()=> import( './pages/auth/Register'))
const  Home = lazy(()=> import('./pages/Home'))
const Header = lazy(()=> import('./components/nav/Header'))
const  RegisterComplete = lazy(()=> import('./pages/auth/RegisterComplete'))
const ForgotPassword = lazy(()=> import('./pages/auth/ForgotPassword'))
const History = lazy(()=> import('./pages/user/History'))
const UserRoute = lazy(()=> import('./components/routes/UserRoute'))
const AdminRoute = lazy(()=> import('./components/routes/AdminRoute'))
const Password = lazy(()=> import('./pages/user/Password'))
const Wishlist = lazy(()=> import('./pages/user/Wishlist'))
const AdminDashboard = lazy(()=> import( './pages/admin/AdminDashboard'))
const CategoryCreate = lazy(()=> import( './pages/admin/category/CategoryCreate'))
const SubCreate = lazy(()=> import( './pages/admin/sub/SubCreate'))
const CategoryUpdate = lazy(()=> import( './pages/admin/category/CategoryUpdate'))
const SubUpdate = lazy(()=> import( "./pages/admin/sub/SubUpdate"))
const AllProducts = lazy(()=> import( "./pages/admin/product/AllProducts"))
const ProductCreate = lazy(()=> import( './pages/admin/product/ProductCreate'))
const ProductUpdate = lazy(()=> import( './pages/admin/product/ProductUpdate'))
const Product = lazy(()=> import( "./pages/Product"))
const CategoryHome = lazy(()=> import( "./pages/category/CategoryHome"))
const SubHome = lazy(()=> import( "./pages/sub/SubHome"))
const Shop = lazy(()=> import( "./pages/Shop"))
const Cart = lazy(()=> import( "./pages/Cart"))
const Checkout = lazy(()=> import( "./pages/Checkout"))
const CreateCouponPage = lazy(()=> import( "./pages/admin/coupon/CreateCouponPage"))
const Payment = lazy(()=> import( "./pages/Payment"))
const CategoryNav = lazy(()=> import( './components/nav/CategoryNav'))
const PagesFooter = lazy(()=> import('./components/nav/PagesFooter'))
const TermsAndConditions = lazy(()=> import( './pages/footer/TermsAndConditions'))
const PrivacyPolicy = lazy(()=> import( './pages/footer/PrivacyPolicy'))
const CookiePolicy = lazy(()=> import( './pages/footer/CookiePolicy'))
const OurStory = lazy(()=> import( './pages/footer/OurStory'))
const WhyChooseUs = lazy(()=> import( './pages/footer/WhyChooseUs'))
const ProductionFacilities = lazy(()=> import( './pages/footer/ProductionFacilities'))
const FAQ = lazy(()=> import( './pages/footer/FAQ'))
const ReturnPolicy = lazy(()=> import( './pages/footer/ReturnPolicy'))
const Contact = lazy(()=> import( './pages/footer/Contact'))
const StoneGuide = lazy(()=> import( './pages/footer/StoneGuide'))
const WeddingRingGuide = lazy(()=> import( './pages/footer/WeddingRingGuide'))
const BirthstoneGuide = lazy(()=> import( './pages/footer/BirthstoneGuide'))
const Alerts = lazy(()=> import( './components/nav/Alerts'))






const App=() =>{
    const dispatch=useDispatch()

    //check firebase auth state
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async (user)=>{
            if(user){
                const idTokenResult=await user.getIdTokenResult()
                currentUser(idTokenResult.token)
                .then((res)=> {
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload:{
                            name:res.data.name,
                            email: res.data.email, 
                            token: idTokenResult.token,
                            role:res.data.role,
                            _id: res.data._id,
                        },
                    })
                })
                .catch(err=> console.log(err))
            }
        })
        return () => unsubscribe();
    }, [dispatch])
    return (
        <Suspense fallback={
            <div className="col text-center p-5">
                JewelryBoutique <LoadingOutlined/>
            </div>
        }>
            <Alerts/>
            <Header/>
            <CategoryNav/>
            <SideDrawer />
            <ToastContainer/>
           
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/register/complete" component={RegisterComplete}/>
                <Route exact path="/forgot/password" component={ForgotPassword}/>
                <UserRoute exact path="/user/history" component={History}/>
                <UserRoute exact path="/user/password" component={Password}/>
                <UserRoute exact path="/user/wishlist" component={Wishlist}/>
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                <AdminRoute exact path="/admin/category" component={CategoryCreate}/>
                <AdminRoute exact path="/admin/category/:slug" component={CategoryUpdate}/>
                <AdminRoute exact path="/admin/sub" component={SubCreate}/>
                <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} />
                <AdminRoute exact path="/admin/product" component={ProductCreate} />
                <AdminRoute exact path="/admin/products" component={AllProducts} />
                <AdminRoute exact path="/admin/product/:slug" component={ProductUpdate} />
                <Route exact path="/product/:slug" component={Product} />
                <Route exact path="/category/:slug" component={CategoryHome} />
                <Route exact path="/sub/:slug" component={SubHome} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
                <UserRoute exact path="/checkout" component={Checkout} />
                <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
                <UserRoute exact path="/payment" component={Payment} />
                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/return-policy" component={ReturnPolicy} />
                <Route exact path="/cookie-policy" component={CookiePolicy} />
                <Route exact path="/our-story" component={OurStory} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/why-choose-us" component={WhyChooseUs} />
                <Route exact path="/production-facilities" component={ProductionFacilities} />
                <Route exact path="/stone-guide" component={StoneGuide} />
                <Route exact path="/wedding-ring-guide" component={WeddingRingGuide} />
                <Route exact path="/birthstone-guide" component={BirthstoneGuide} />
            </Switch>
            <PagesFooter/>
        </Suspense>
    )
}

export default App;
