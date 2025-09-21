import { Product } from "../components/ArtisanDashboard";
import { CartItem } from "../App";

export const languages = {
    en: { name: 'English', nativeName: 'English' },
    hi: { name: 'Hindi', nativeName: 'हिन्दी' },
    bn: { name: 'Bengali', nativeName: 'বাংলা' },
    ta: { name: 'Tamil', nativeName: 'தமிழ்' },
    te: { name: 'Telugu', nativeName: 'తెలుగు' },
    mr: { name: 'Marathi', nativeName: 'मराठी' },
    pa: { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    gu: { name: 'Gujarati', nativeName: 'ગુજરાતી' },
    kn: { name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
};

export const translations = {
  en: {
    common: {
      getStarted: "Get Started",
      edit: "Edit",
      save: "Save",
      add: "Add",
      publish: "Publish",
      cancel: "Cancel",
      close: "Close",
      delete: "Delete"
    },
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      testimonials: "Testimonials",
    },
    hero: {
        title: {
            line1: "Crafted by Hands,",
            line2: "Powered by AI."
        },
        subtitle: "The AI-powered marketplace connecting talented artisans with customers who cherish unique, handmade treasures.",
        cta: {
            join: "Join the Marketplace",
            explore: "Explore Features"
        }
    },
    features: {
        title: "The Artisan's AI Toolkit",
        subtitle: "Everything you need to thrive in the digital marketplace, powered by cutting-edge generative AI.",
        card1: {
            title: "Effortless Voice Control",
            description: "Manage your entire store—upload products, set prices, and check sales—using simple voice commands in your native language."
        },
        card2: {
            title: "Global Conversations",
            description: "Communicate seamlessly with customers worldwide. Our AI automatically translates your descriptions and messages, bridging the language gap."
        },
        card3: {
            title: "AI Story & Description Generator",
            description: "Simply upload a photo or speak about your craft, and let our AI generate compelling product descriptions and the cultural story behind your work."
        },
        card4: {
            title: "Smart Price Advisor",
            description: "Get intelligent price suggestions for your products. Our AI analyzes market trends and similar items to help you price your craft fairly and competitively."
        }
    },
    howItWorks: {
        title: "How It Works",
        subtitle: "A simple and powerful process for both creators and connoisseurs.",
        artisans: {
            title: "For Artisans",
            step1: {
                title: "Create Your Store",
                description: "Sign up in minutes. Use your voice or upload photos to add your products. No technical skills needed."
            },
            step2: {
                title: "Let AI Assist",
                description: "Our AI helps you write beautiful descriptions, tell your craft's story, and set the right price to attract buyers."
            },
            step3: {
                title: "Connect & Sell",
                description: "Reach a global audience of conscious consumers, manage orders, and grow your business."
            }
        },
        customers: {
            title: "For Customers",
            step1: {
                title: "Discover Treasures",
                description: "Explore a curated marketplace of authentic, handmade crafts from talented artisans across the country."
            },
            step2: {
                title: "Connect with Creators",
                description: "Read the unique stories behind each product and learn about the creators who make them."
            },
            step3: {
                title: "Shop with Purpose",
                description: "Buy beautiful goods at fair prices, knowing you’re directly supporting local artists and cultural heritage."
            }
        }
    },
    testimonials: {
        title: "From Our Community",
        subtitle: "Hear from the artisans and customers building the future of craft.",
        card1: {
            quote: "Shilpo AI provided the perfect platform to sell my Jaipur Blue Pottery. The AI story generator helped me share the history of my craft, connecting me with customers who truly value my work.",
            name: "Rajesh Singh",
            craft: "Pottery Artisan"
        },
        card2: {
            quote: "I love using this platform to find unique, handmade items. Shilpo AI helped me connect with local artisans and get beautiful, high-quality products at the best rates. Supporting creators directly is a huge plus!",
            name: "Priya Patel",
            craft: "Craft Enthusiast"
        },
        card3: {
            quote: "My hand-woven Pashmina shawls were only sold locally. Thanks to Shilpo AI, I now have an international audience. The voice command feature makes managing my online store incredibly easy.",
            name: "Fatima Khan",
            craft: "Textile Weaver"
        },
        card4: {
            quote: "Finding authentic Madhubani paintings used to be so difficult. Through Shilpo AI, I bought a masterpiece directly from an artist in Bihar. The process was seamless and the price was fair.",
            name: "Michael Chen",
            craft: "Art Collector"
        }
    },
    cta: {
        title: "Join the Shilpo AI Community",
        subtitle: "Whether you're an artisan ready to sell, or a shopper looking for authentic crafts, our platform connects you. Sign up for free today.",
        button: "Create Your Free Account",
        note: "No credit card required."
    },
    footer: {
        description: "Connecting local artisans and conscious buyers through the power of generative AI.",
        poweredBy: "Powered by Google Cloud AI",
        company: {
            title: "Company",
            about: "About Us",
            careers: "Careers",
            press: "Press"
        },
        resources: {
            title: "Resources",
            blog: "Blog",
            help: "Help Center",
            contact: "Contact Us"
        },
        legal: {
            title: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        copyright: "© {year} Shilpo AI. All rights reserved."
    },
    joinModal: {
        title: "Join Our Community",
        subtitle: "How would you like to get started?",
        artisan: {
            title: "I'm an Artisan",
            description: "Create your store, tell your story, and sell your unique crafts to a global audience."
        },
        buyer: {
            title: "I'm a Buyer",
            description: "Discover authentic, handmade treasures and support talented local creators."
        }
    },
    artisanSignup: {
        title: "Register as an Artisan",
        subtitle: "Verify your identity to get started.",
        back: "Back to Home",
        labels: {
            name: "Full Name",
            location: "Your Location (City, State)",
            idType: "ID Card Type",
            aadharNumber: "Aadhaar Number",
            rationNumber: "Ration Card Number",
            voteridNumber: "Voter ID Number",
            language: "Preferred Language",
            categories: "What do you sell?",
        },
        placeholders: {
            name: "e.g., Priya Patel",
            location: "e.g., Jaipur, Rajasthan",
        },
        idOptions: {
            select: "Select an ID type to upload",
            aadhar: "Aadhar Card",
            ration: "Ration Card",
            voterid: "Voter ID Card",
        },
        categories: {
            pottery: "Pottery",
            art: "Art & Paintings",
            clothing: "Clothing & Textiles",
            jewellery: "Jewellery",
        },
        button: "Create My Store",
        detectLocationLabel: "Detect my location",
        idUploadModal: {
            title: "Upload your {idType}",
            subtitle: "Please upload a clear image of the front of your document.",
            dropzone: "Drag & drop your image here, or",
            selectFile: "Select a file",
            fileTypes: "Supports: JPG, PNG, WEBP",
            confirm: "Confirm Upload",
            fileSelected: "File selected:",
            changeFile: "Change file",
            error: "Invalid file type. Please upload an image.",
            fileUploaded: "File Uploaded",
        },
        verification: {
            verifying: "Verifying your ID...",
            verified: "Identity Verified!",
            failedAadhaar: "Verification failed. Please upload a clear Aadhaar card image.",
            failedRation: "Verification failed. Please upload a clear Ration card image.",
            failedVoterId: "Verification failed. Please upload a clear Voter ID card image.",
        },
        errors: {
            name: "Please enter your full name.",
            location: "Please enter your location.",
            idType: "Please select an ID type and complete verification.",
            idVerification: "Please complete identity verification to continue.",
            categories: "Please select at least one category."
        },
        successDialog: {
            title: "Store Created Successfully!",
            message: "Welcome, {name}! Your store is now live. Let's get you to your dashboard to start adding products.",
            button: "Go to my Dashboard"
        },
        existingMember: "Already an existing member?",
        signInHere: "Sign in here",
    },
     artisanSignIn: {
        title: "Sign In as an Artisan",
        subtitle: "Welcome back! Access your dashboard.",
        back: "Back to Home",
        labels: {
            name: "Full Name",
        },
        placeholders: {
            name: "Enter your registered name",
        },
        button: "Sign In",
        newMember: "New to the platform?",
        signUpHere: "Sign up here",
        errors: {
            name: "Please enter your full name.",
            loginFailed: "No artisan found with this name. Please check and try again.",
        }
    },
    customerSignup: {
        title: "Create Your Buyer Account",
        subtitle: "Join our community to discover and purchase unique handmade crafts.",
        back: "Back to Home",
        labels: {
            name: "Full Name",
            email: "Email Address",
            password: "Password",
        },
        placeholders: {
            name: "e.g., Priya Patel",
            email: "e.g., priya@example.com",
            password: "Enter a secure password",
        },
        button: "Create My Account",
        errors: {
            name: "Please enter your full name.",
            email: "Please enter a valid email address.",
            password: "Password must be at least 8 characters long.",
        },
        successDialog: {
            title: "Account Created!",
            message: "Welcome, {name}! You can now explore the marketplace and connect with talented artisans.",
            button: "Start Exploring"
        },
        existingMember: "Already an existing member?",
        signInHere: "Sign in here",
    },
    customerSignIn: {
        title: "Sign In to Your Account",
        subtitle: "Welcome back! Explore handmade crafts.",
        back: "Back to Home",
        labels: {
            email: "Email Address",
            password: "Password",
        },
        placeholders: {
            email: "e.g., priya@example.com",
            password: "Enter your password",
        },
        button: "Sign In",
        newMember: "New to the platform?",
        signUpHere: "Sign up here",
        errors: {
            email: "Please enter a valid email address.",
            password: "Password cannot be empty.",
            loginFailed: "Invalid credentials. Please try again.",
        }
    },
    dashboard: {
        greeting: {
            morning: "Good Morning, {name}!",
            afternoon: "Good Afternoon, {name}!",
            evening: "Good Evening, {name}!",
        },
        subtitle: "This is your creative hub. Manage products, view sales, and share your story with the world.",
        logout: "Log Out",
        addNewProduct: "Add New Product",
        deleteProduct: "Delete Product",
        sales: {
            title: "Sales At-a-Glance",
            totalSales: "Total Sales",
            orders: "Orders",
            productsSold: "Products Sold",
        },
        story: {
            title: "My Story",
            placeholder: "Share the story of your craft, your inspiration, and your heritage. This is your chance to connect with customers on a personal level. Let them know what makes your work special.",
        },
        products: {
            title: "My Products",
            emptyState: "You haven't added any products yet. Let's add your first one!",
        },
        addProductModal: {
            title: "Add a New Product",
            step1: {
                title: "Upload Product Photos",
                uploadLabel: "Upload up to 5 photos. The first is your main image.",
                generate: "Generate Details from Images",
            },
            step2: {
                title: "Generating Details...",
                message: "Our AI is crafting a beautiful listing for your product. This might take a moment.",
            },
            step3: {
                title: "Review & Publish",
                subtitle: "Your AI-generated product details are ready. Feel free to edit them before publishing.",
                labels: {
                    title: "Product Title",
                    description: "Product Description",
                    story: "The Story Behind It",
                    price: "Suggested Price (INR)",
                    tags: "Tags / Keywords",
                },
                productAddedSuccess: "Product Added Successfully!",
            },
            errors: {
                noImage: "Please upload at least one product image.",
                generationFailed: "The AI failed to generate details. Please try again or contact support."
            }
        },
        selectionBanner: {
          title: "Select a product to delete",
          cancel: "Cancel"
        }
    },
    customerDashboard: {
        greeting: "Welcome, {name}!",
        searchPlaceholder: "Search for pottery, textiles, art...",
        noResults: "No crafts found for '{query}'",
        emptyState: "The marketplace is just getting started! Check back soon for amazing crafts.",
        browseAll: "Browse All Crafts",
        allProducts: "All Products",
        addToCart: "Add to Cart",
        buyNow: "Buy Now",
        quantity: "Quantity",
        viewDetails: "View Details",
        tabs: {
          browse: "Browse Products",
          myOrders: "My Orders"
        },
        filters: {
            title: "Categories",
            all: "All",
            pottery: "Pottery",
            art: "Art & Paintings",
            clothing: "Clothing & Textiles",
            jewellery: "Jewellery",
        },
        sort: {
            title: "Sort by",
            newest: "Newest Arrivals",
            priceAsc: "Price: Low to High",
            priceDesc: "Price: High to Low",
        },
        accountSettings: "Account Settings"
    },
    orders: {
      title: "My Orders",
      emptyState: "You haven't placed any orders yet.",
      emptyStateSubtext: "Start browsing to find your next handmade treasure!",
      orderId: "Order ID",
      orderDate: "Order Date",
      totalAmount: "Total Amount",
      status: "Status",
      orderDetails: "Order Details",
      itemsInOrder: "Items in this Order",
      priceBreakdown: "Price Breakdown",
      expectedDelivery: "Expected Delivery",
      deliveryTracker: "Delivery Tracker",
      statusTypes: {
        ordered: "Ordered",
        packed: "Packed",
        shipped: "Shipped",
        delivered: "Delivered"
      }
    },
    cart: {
        title: "Your Shopping Cart",
        empty: "Your cart is empty.",
        total: "Total",
        checkout: "Proceed to Checkout",
        remove: "Remove",
        itemAdded: "Item added to cart!",
        itemRemoved: "Item removed from cart."
    },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "Secure Checkout",
        orderSummary: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        shippingFree: "FREE",
        total: "Total",
        totalPayable: "Total Payable",
        paymentMethod: "Payment Method",
        methods: {
            card: "Credit/Debit Card",
            upi: "UPI",
            netbanking: "Net Banking"
        },
        cardForm: {
            number: "Card Number",
            holder: "Cardholder Name",
            expiry: "Expiry (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "Scan QR to Pay",
            or: "OR",
            enterId: "Enter UPI ID",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "Select Your Bank",
            banks: ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Punjab National Bank"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "Pay Securely",
        processing: "Processing Payment...",
        success: "Payment Successful!",
        successMessage: "Your order is confirmed. Thank you for supporting local artisans!",
        continueShopping: "Continue Shopping",
        step1: "Verification",
        step2: "Shipping",
        step3: "Payment",
        otp: {
            title: "Verify Your Mobile Number",
            subtitle: "We'll send a one-time password to your phone.",
            phoneLabel: "10-digit Mobile Number",
            phonePlaceholder: "Enter your mobile number",
            sendButton: "Send OTP",
            enterOtpTitle: "Enter OTP",
            enterOtpSubtitle: "Enter the 6-digit code sent to {phoneNumber}",
            otpLabel: "One-Time Password",
            otpPlaceholder: "Enter 6-digit OTP",
            verifyButton: "Verify & Proceed"
        },
        address: {
            title: "Shipping Address",
            subtitle: "Where should we send your order?",
            fullName: "Full Name",
            addressLine: "Address (House No, Building, Street, Area)",
            city: "City",
            state: "State",
            pincode: "PIN Code",
            saveButton: "Save and Continue"
        },
        shippingTo: "Shipping to"
    },
    deleteConfirmation: {
      title: "Confirm Deletion",
      message: "Are you sure you want to delete '{productName}'? This action cannot be undone.",
      confirmButton: "Delete Product",
      cancelButton: "Cancel"
    },
    deleteProductModal: {
      title: "Delete Product by Voice",
      prompt: "Say the name of the product to delete.",
      deleted: "Product deleted.",
      cancelled: "Deletion cancelled."
    },
    voiceAssistant: {
        ui: {
            tooltip: "Activate Voice Assistant",
            listening: "Listening...",
            processing: "Processing...",
            talkToAI: "Talk to AI"
        },
        responses: {
            greeting: "Hello! How can I help you today?",
            commandNotFound: "I'm sorry, I didn't understand that. Please try again.",
            addProduct: {
                promptForImage: "Of course. Please upload one to five photos of your new product. I will generate the details for you automatically from the images.",
                generating: "Thank you. I'm now generating the product details with AI. This might take a moment.",
                promptForReview: "I've created the product details. Please review them on your screen. You can make changes if needed. When you're ready, press the publish button."
            },
            deleteProduct: {
                promptForSelection: "Which product would you like to delete? Please select it.",
                noProducts: "You don't have any products to delete.",
                promptForName: "Which product would you like to delete? Please say its name.",
                productNotFound: "I couldn't find a product with that name. Please try again.",
                deleted: "Okay, I've deleted '{productName}'.",
                cancelled: "Okay, I've cancelled the deletion."
            },
            confirmation: {
                yes: "yes,yeah,confirm,correct,yep,sure",
                no: "no,nope,cancel,stop,incorrect"
            }
        },
        commands: {
            addProduct: "add new product,create a product,new item,add product,add a new product,create new product,make a new product,i want to add a product,add an item",
            deleteProduct: "delete product,remove product,delete an item,remove an item,i want to delete a product"
        }
    },
    accountSettings: {
        title: "Account Settings",
        backToDashboard: "Back to Dashboard",
        memberSince: "Member since",
        totalOrders: "Total Orders"
    },
    shilpoPlus: {
        title: "Shilpo+",
        subtitle: "Unlock premium benefits and enhance your connection to artisan crafts.",
        benefit1: "Faster Delivery on eligible items",
        benefit2: "Early access to new crafts & collections",
        benefit3: "Exclusive member-only prices",
        cta: "Upgrade to Shilpo+",
        comingSoon: "Coming Soon!"
    }
  },
  hi: {
    common: {
      getStarted: "शुरू करें",
      edit: "संपादित करें",
      save: "सहेजें",
      add: "जोड़ें",
      publish: "प्रकाशित करें",
      cancel: "रद्द करें",
      close: "बंद करें",
      delete: "हटाएं"
    },
    nav: {
      features: "विशेषताएँ",
      howItWorks: "यह कैसे काम करता है",
      testimonials: "प्रशंसापत्र",
    },
    hero: {
        title: {
            line1: "हाथों से निर्मित,",
            line2: "AI द्वारा संचालित।"
        },
        subtitle: "प्रतिभाशाली कारीगरों को उन ग्राहकों से जोड़ने वाला AI-संचालित बाज़ार जो अद्वितीय, हस्तनिर्मित खजानों को संजोते हैं।",
        cta: {
            join: "मार्केटप्लेस से जुड़ें",
            explore: "विशेषताएँ देखें"
        }
    },
    features: {
        title: "कारीगर का AI टूलकिट",
        subtitle: "डिजिटल बाज़ार में आगे बढ़ने के लिए आपको जो कुछ भी चाहिए, वह सब अत्याधुनिक जनरेटिव AI द्वारा संचालित है।",
        card1: {
            title: "सरल वॉयस कंट्रोल",
            description: "अपनी मूल भाषा में सरल वॉयस कमांड का उपयोग करके अपना पूरा स्टोर प्रबंधित करें—उत्पाद अपलोड करें, कीमतें निर्धारित करें और बिक्री जांचें।"
        },
        card2: {
            title: "वैश्विक बातचीत",
            description: "दुनिया भर के ग्राहकों के साथ सहजता से संवाद करें। हमारा AI आपके विवरण और संदेशों का स्वचालित रूप से अनुवाद करता है, भाषा की बाधा को दूर करता है।"
        },
        card3: {
            title: "AI कहानी और विवरण जेनरेटर",
            description: "बस एक तस्वीर अपलोड करें या अपनी कला के बारे में बोलें, और हमारे AI को आकर्षक उत्पाद विवरण और आपके काम के पीछे की सांस्कृतिक कहानी बनाने दें।"
        },
        card4: {
            title: "स्मार्ट मूल्य सलाहकार",
            description: "अपने उत्पादों के लिए बुद्धिमान मूल्य सुझाव प्राप्त करें। हमारा AI बाजार के रुझानों और समान वस्तुओं का विश्लेषण करता है ताकि आप अपनी कला का उचित और प्रतिस्पर्धी मूल्य निर्धारण कर सकें।"
        }
    },
    howItWorks: {
        title: "यह कैसे काम करता है",
        subtitle: "रचनाकारों और पारखी दोनों के लिए एक सरल और शक्तिशाली प्रक्रिया।",
        artisans: {
            title: "कारीगरों के लिए",
            step1: {
                title: "अपना स्टोर बनाएं",
                description: "मिनटों में साइन अप करें। अपने उत्पादों को जोड़ने के लिए अपनी आवाज़ का उपयोग करें या फ़ोटो अपलोड करें। किसी तकनीकी कौशल की आवश्यकता नहीं है।"
            },
            step2: {
                title: "AI को सहायता करने दें",
                description: "हमारा AI आपको सुंदर विवरण लिखने, आपकी कला की कहानी बताने और खरीदारों को आकर्षित करने के लिए सही कीमत निर्धारित करने में मदद करता है।"
            },
            step3: {
                title: "जुड़ें और बेचें",
                description: "जागरूक उपभोक्ताओं के वैश्विक दर्शकों तक पहुंचें, ऑर्डर प्रबंधित करें और अपना व्यवसाय बढ़ाएं।"
            }
        },
        customers: {
            title: "ग्राहकों के लिए",
            step1: {
                title: "खजाने खोजें",
                description: "देश भर के प्रतिभाशाली कारीगरों से प्रामाणिक, हस्तनिर्मित शिल्पों का एक क्यूरेटेड बाज़ार देखें।"
            },
            step2: {
                title: "रचनाकारों से जुड़ें",
                description: "प्रत्येक उत्पाद के पीछे की अनूठी कहानियों को पढ़ें और उन्हें बनाने वाले रचनाकारों के बारे में जानें।"
            },
            step3: {
                title: "उद्देश्य के साथ खरीदारी करें",
                description: "उचित कीमतों पर सुंदर सामान खरीदें, यह जानते हुए कि आप सीधे स्थानीय कलाकारों और सांस्कृतिक विरासत का समर्थन कर रहे हैं।"
            }
        }
    },
    testimonials: {
        title: "हमारे समुदाय से",
        subtitle: "उन कारीगरों और ग्राहकों से सुनें जो शिल्प का भविष्य बना रहे हैं।",
        card1: {
            quote: "शिल्पो AI ने मेरी जयपुर ब्लू पॉटरी बेचने के लिए एकदम सही मंच प्रदान किया। AI कहानी जनरेटर ने मुझे अपनी कला का इतिहास साझा करने में मदद की, मुझे उन ग्राहकों से जोड़ा जो वास्तव में मेरे काम को महत्व देते हैं।",
            name: "राजेश सिंह",
            craft: "मिट्टी के कारीगर"
        },
        card2: {
            quote: "मुझे अद्वितीय, हस्तनिर्मित वस्तुएं खोजने के लिए इस मंच का उपयोग करना पसंद है। शिल्पो AI ने मुझे स्थानीय कारीगरों से जुड़ने और सर्वोत्तम दरों पर सुंदर, उच्च-गुणवत्ता वाले उत्पाद प्राप्त करने में मदद की। सीधे रचनाकारों का समर्थन करना एक बहुत बड़ा प्लस है!",
            name: "प्रिया पटेल",
            craft: "शिल्प उत्साही"
        },
        card3: {
            quote: "मेरी हाथ से बुनी पश्मीना शॉलें केवल स्थानीय रूप से बेची जाती थीं। शिल्पो AI के लिए धन्यवाद, अब मेरे पास एक अंतरराष्ट्रीय दर्शक है। वॉयस कमांड सुविधा मेरे ऑनलाइन स्टोर का प्रबंधन अविश्वसनीय रूप से आसान बनाती है।",
            name: "फातिमा खान",
            craft: "कपड़ा बुनकर"
        },
        card4: {
            quote: "प्रामाणिक मधुबनी पेंटिंग खोजना पहले बहुत मुश्किल था। शिल्पो AI के माध्यम से, मैंने सीधे बिहार के एक कलाकार से एक उत्कृष्ट कृति खरीदी। प्रक्रिया सहज थी और कीमत उचित थी।",
            name: "माइकल चेन",
            craft: "कला संग्राहक"
        }
    },
    cta: {
        title: "शिल्पो AI समुदाय में शामिल हों",
        subtitle: "चाहे आप बेचने के लिए तैयार एक कारीगर हों, या प्रामाणिक शिल्प की तलाश में एक खरीदार हों, हमारा मंच आपको जोड़ता है। आज ही मुफ्त में साइन अप करें।",
        button: "अपना निःशुल्क खाता बनाएं",
        note: "क्रेडिट कार्ड की आवश्यकता नहीं है।"
    },
    footer: {
        description: "जनरेटिव AI की शक्ति के माध्यम से स्थानीय कारीगरों और जागरूक खरीदारों को जोड़ना।",
        poweredBy: "Google Cloud AI द्वारा संचालित",
        company: {
            title: "कंपनी",
            about: "हमारे बारे में",
            careers: "करियर",
            press: "प्रेस"
        },
        resources: {
            title: "संसाधन",
            blog: "ब्लॉग",
            help: "सहायता केंद्र",
            contact: "संपर्क करें"
        },
        legal: {
            title: "कानूनी",
            privacy: "गोपनीयता नीति",
            terms: "सेवा की शर्तें"
        },
        copyright: "© {year} शिल्पो AI. सर्वाधिकार सुरक्षित।"
    },
    joinModal: {
        title: "हमारे समुदाय में शामिल हों",
        subtitle: "आप कैसे शुरुआत करना चाहेंगे?",
        artisan: {
            title: "मैं एक कारीगर हूँ",
            description: "अपना स्टोर बनाएं, अपनी कहानी बताएं, और अपने अद्वितीय शिल्प को वैश्विक दर्शकों को बेचें।"
        },
        buyer: {
            title: "मैं एक खरीदार हूँ",
            description: "प्रामाणिक, हस्तनिर्मित खजाने खोजें और प्रतिभाशाली स्थानीय रचनाकारों का समर्थन करें।"
        }
    },
    artisanSignup: {
        title: "कारीगर के रूप में पंजीकरण करें",
        subtitle: "शुरू करने के लिए अपनी पहचान सत्यापित करें।",
        back: "होम पर वापस जाएं",
        labels: {
            name: "पूरा नाम",
            location: "आपका स्थान (शहर, राज्य)",
            idType: "पहचान पत्र का प्रकार",
            aadharNumber: "आधार संख्या",
            rationNumber: "राशन कार्ड नंबर",
            voteridNumber: "मतदाता पहचान पत्र संख्या",
            language: "पसंदीदा भाषा",
            categories: "आप क्या बेचते हैं?",
        },
        placeholders: {
            name: "उदा., प्रिया पटेल",
            location: "उदा., जयपुर, राजस्थान",
        },
        idOptions: {
            select: "अपलोड करने के लिए एक पहचान पत्र प्रकार चुनें",
            aadhar: "आधार कार्ड",
            ration: "राशन कार्ड",
            voterid: "मतदाता पहचान पत्र",
        },
        categories: {
            pottery: "मिट्टी के बर्तन",
            art: "कला और पेंटिंग",
            clothing: "कपड़े और वस्त्र",
            jewellery: "आभूषण",
        },
        button: "मेरा स्टोर बनाएं",
        detectLocationLabel: "मेरा स्थान पता करें",
        idUploadModal: {
            title: "अपना {idType} अपलोड करें",
            subtitle: "कृपया अपने दस्तावेज़ के सामने की एक स्पष्ट छवि अपलोड करें।",
            dropzone: "अपनी छवि यहां खींचें और छोड़ें, या",
            selectFile: "एक फ़ाइल चुनें",
            fileTypes: "समर्थित: JPG, PNG, WEBP",
            confirm: "अपलोड की पुष्टि करें",
            fileSelected: "फ़ाइल चयनित:",
            changeFile: "फ़ाइल बदलें",
            error: "अमान्य फ़ाइल प्रकार। कृपया एक छवि अपलोड करें।",
            fileUploaded: "फ़ाइल अपलोड की गई",
        },
        verification: {
            verifying: "आपकी आईडी सत्यापित हो रही है...",
            verified: "पहचान सत्यापित!",
            failedAadhaar: "सत्यापन विफल। कृपया एक स्पष्ट आधार कार्ड छवि अपलोड करें।",
            failedRation: "सत्यापन विफल। कृपया एक स्पष्ट राशन कार्ड छवि अपलोड करें।",
            failedVoterId: "सत्यापन विफल। कृपया एक स्पष्ट मतदाता पहचान पत्र छवि अपलोड करें।",
        },
        errors: {
            name: "कृपया अपना पूरा नाम दर्ज करें।",
            location: "कृपया अपना स्थान दर्ज करें।",
            idType: "कृपया एक पहचान पत्र प्रकार चुनें और सत्यापन पूरा करें।",
            idVerification: "जारी रखने के लिए कृपया पहचान सत्यापन पूरा करें।",
            categories: "कृपया कम से कम एक श्रेणी चुनें।"
        },
        successDialog: {
            title: "स्टोर सफलतापूर्वक बनाया गया!",
            message: "स्वागत है, {name}! आपका स्टोर अब लाइव है। चलिए आपको उत्पाद जोड़ने के लिए आपके डैशबोर्ड पर ले चलते हैं।",
            button: "मेरे डैशबोर्ड पर जाएं"
        },
        existingMember: "पहले से सदस्य हैं?",
        signInHere: "यहां साइन इन करें",
    },
    artisanSignIn: {
        title: "एक कारीगर के रूप में साइन इन करें",
        subtitle: "वापसी पर स्वागत है! अपने डैशबोर्ड तक पहुँचें।",
        back: "होम पर वापस जाएं",
        labels: {
            name: "पूरा नाम",
        },
        placeholders: {
            name: "अपना पंजीकृत नाम दर्ज करें",
        },
        button: "साइन इन करें",
        newMember: "प्लेटफ़ॉर्म पर नए हैं?",
        signUpHere: "यहां साइन अप करें",
        errors: {
            name: "कृपया अपना पूरा नाम दर्ज करें।",
            loginFailed: "इस नाम से कोई कारीगर नहीं मिला। कृपया जांचें और पुनः प्रयास करें।",
        }
    },
    customerSignup: {
        title: "अपना खरीदार खाता बनाएं",
        subtitle: "अद्वितीय हस्तनिर्मित शिल्प खोजने और खरीदने के लिए हमारे समुदाय में शामिल हों।",
        back: "होम पर वापस जाएं",
        labels: {
            name: "पूरा नाम",
            email: "ईमेल पता",
            password: "पासवर्ड",
        },
        placeholders: {
            name: "उदा., प्रिया पटेल",
            email: "उदा., priya@example.com",
            password: "एक सुरक्षित पासवर्ड दर्ज करें",
        },
        button: "मेरा खाता बनाएं",
        errors: {
            name: "कृपया अपना पूरा नाम दर्ज करें।",
            email: "कृपया एक मान्य ईमेल पता दर्ज करें।",
            password: "पासवर्ड कम से कम 8 अक्षर का होना चाहिए।",
        },
        successDialog: {
            title: "खाता बन गया!",
            message: "स्वागत है, {name}! अब आप बाज़ार का अन्वेषण कर सकते हैं और प्रतिभाशाली कारीगरों से जुड़ सकते हैं।",
            button: "अन्वेषण शुरू करें"
        },
        existingMember: "पहले से सदस्य हैं?",
        signInHere: "यहां साइन इन करें",
    },
    customerSignIn: {
        title: "अपने खाते में साइन इन करें",
        subtitle: "वापसी पर स्वागत है! हस्तनिर्मित शिल्पों का अन्वेषण करें।",
        back: "होम पर वापस जाएं",
        labels: {
            email: "ईमेल पता",
            password: "पासवर्ड",
        },
        placeholders: {
            email: "उदा., priya@example.com",
            password: "अपना पासवर्ड दर्ज करें",
        },
        button: "साइन इन करें",
        newMember: "प्लेटफ़ॉर्म पर नए हैं?",
        signUpHere: "यहां साइन अप करें",
        errors: {
            email: "कृपया एक मान्य ईमेल पता दर्ज करें।",
            password: "पासवर्ड खाली नहीं हो सकता।",
            loginFailed: "अमान्य क्रेडेंशियल। कृपया पुनः प्रयास करें।",
        }
    },
    dashboard: {
        greeting: {
            morning: "सुप्रभात, {name}!",
            afternoon: "शुभ दोपहर, {name}!",
            evening: "शुभ संध्या, {name}!",
        },
        subtitle: "यह आपका रचनात्मक केंद्र है। उत्पादों का प्रबंधन करें, बिक्री देखें, और अपनी कहानी दुनिया के साथ साझा करें।",
        logout: "लॉग आउट",
        addNewProduct: "नया उत्पाद जोड़ें",
        deleteProduct: "उत्पाद हटाएं",
        sales: {
            title: "बिक्री एक नज़र में",
            totalSales: "कुल बिक्री",
            orders: "आदेश",
            productsSold: "बेचे गए उत्पाद",
        },
        story: {
            title: "मेरी कहानी",
            placeholder: "अपनी कला, अपनी प्रेरणा और अपनी विरासत की कहानी साझा करें। यह ग्राहकों के साथ व्यक्तिगत स्तर पर जुड़ने का आपका मौका है। उन्हें बताएं कि आपका काम क्या खास बनाता है।",
        },
        products: {
            title: "मेरे उत्पाद",
            emptyState: "आपने अभी तक कोई उत्पाद नहीं जोड़ा है। चलिए अपना पहला उत्पाद जोड़ते हैं!",
        },
        addProductModal: {
            title: "एक नया उत्पाद जोड़ें",
            step1: {
                title: "उत्पाद तस्वीरें अपलोड करें",
                uploadLabel: "5 तक तस्वीरें अपलोड करें। पहली आपकी मुख्य छवि है।",
                generate: "छवियों से विवरण उत्पन्न करें",
            },
            step2: {
                title: "विवरण उत्पन्न हो रहे हैं...",
                message: "हमारा AI आपके उत्पाद के लिए एक सुंदर लिस्टिंग तैयार कर रहा है। इसमें कुछ समय लग सकता है।",
            },
            step3: {
                title: "समीक्षा करें और प्रकाशित करें",
                subtitle: "आपके AI-जनित उत्पाद विवरण तैयार हैं। प्रकाशित करने से पहले उन्हें संपादित करने के लिए स्वतंत्र महसूस करें।",
                labels: {
                    title: "उत्पाद शीर्षक",
                    description: "उत्पाद विवरण",
                    story: "इसके पीछे की कहानी",
                    price: "सुझाई गई कीमत (INR)",
                    tags: "टैग / कीवर्ड",
                },
                productAddedSuccess: "उत्पाद सफलतापूर्वक जोड़ा गया!",
            },
            errors: {
                noImage: "कृपया कम से कम एक उत्पाद छवि अपलोड करें।",
                generationFailed: "AI विवरण उत्पन्न करने में विफल रहा। कृपया पुनः प्रयास करें या समर्थन से संपर्क करें।"
            }
        },
        selectionBanner: {
          title: "हटाने के लिए एक उत्पाद चुनें",
          cancel: "रद्द करें"
        }
    },
    customerDashboard: {
        greeting: "स्वागत है, {name}!",
        searchPlaceholder: "मिट्टी के बर्तन, वस्त्र, कला खोजें...",
        noResults: "'{query}' के लिए कोई शिल्प नहीं मिला",
        emptyState: "बाज़ार अभी शुरू हो रहा है! अद्भुत शिल्पों के लिए जल्द ही वापस देखें।",
        browseAll: "सभी शिल्प ब्राउज़ करें",
        allProducts: "सभी उत्पाद",
        addToCart: "कार्ट में डालें",
        buyNow: "अभी खरीदें",
        quantity: "मात्रा",
        viewDetails: "विवरण देखें",
        tabs: {
          browse: "उत्पाद ब्राउज़ करें",
          myOrders: "मेरे आदेश"
        },
        filters: {
            title: "श्रेणियाँ",
            all: "सभी",
            pottery: "मिट्टी के बर्तन",
            art: "कला और पेंटिंग",
            clothing: "कपड़े और वस्त्र",
            jewellery: "आभूषण",
        },
        sort: {
            title: "इसके अनुसार क्रमबद्ध करें",
            newest: "नवीनतम आगमन",
            priceAsc: "कीमत: कम से ज्यादा",
            priceDesc: "कीमत: ज्यादा से कम",
        },
        accountSettings: "अकाउंट सेटिंग"
    },
    orders: {
      title: "मेरे आदेश",
      emptyState: "आपने अभी तक कोई आदेश नहीं दिया है।",
      emptyStateSubtext: "अपना अगला हस्तनिर्मित खजाना खोजने के लिए ब्राउज़ करना शुरू करें!",
      orderId: "आदेश आईडी",
      orderDate: "आदेश की तारीख",
      totalAmount: "कुल राशि",
      status: "स्थिति",
      orderDetails: "आदेश विवरण",
      itemsInOrder: "इस आदेश में आइटम",
      priceBreakdown: "मूल्य का विवरण",
      expectedDelivery: "अपेक्षित डिलीवरी",
      deliveryTracker: "डिलीवरी ट्रैकर",
      statusTypes: {
        ordered: "आदेश दिया गया",
        packed: "पैक किया गया",
        shipped: "भेज दिया गया",
        delivered: "पहुंचा दिया गया"
      }
    },
    cart: {
        title: "आपकी शॉपिंग कार्ट",
        empty: "आपकी कार्ट खाली है।",
        total: "कुल",
        checkout: "चेकआउट के लिए आगे बढ़ें",
        remove: "हटाएं",
        itemAdded: "आइटम कार्ट में जोड़ा गया!",
        itemRemoved: "आइटम कार्ट से हटा दिया गया।"
    },
    payment: {
        title: "अपनी खरीद पूरी करें",
        secureCheckout: "सुरक्षित चेकआउट",
        orderSummary: "आदेश सारांश",
        subtotal: "उप-योग",
        shipping: "शिपिंग",
        shippingFree: "मुफ़्त",
        total: "कुल",
        totalPayable: "कुल देय राशि",
        paymentMethod: "भुगतान का तरीका",
        methods: {
            card: "क्रेडिट/डेबिट कार्ड",
            upi: "UPI",
            netbanking: "नेट बैंकिंग"
        },
        cardForm: {
            number: "कार्ड नंबर",
            holder: "कार्डधारक का नाम",
            expiry: "समाप्ति (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "भुगतान करने के लिए QR स्कैन करें",
            or: "या",
            enterId: "UPI ID दर्ज करें",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "अपना बैंक चुनें",
            banks: ["भारतीय स्टेट बैंक", "एचडीएफसी बैंक", "आईसीआईसीआई बैंक", "एक्सिस बैंक", "पंजाब नेशनल बैंक"]
        },
        payButton: "₹{amount} का भुगतान करें",
        paySecurely: "सुरक्षित रूप से भुगतान करें",
        processing: "भुगतान संसाधित हो रहा है...",
        success: "भुगतान सफल!",
        successMessage: "आपका ऑर्डर पक्का हो गया है। स्थानीय कारीगरों का समर्थन करने के लिए धन्यवाद!",
        continueShopping: "खरीदारी जारी रखें",
        step1: "सत्यापन",
        step2: "शिपिंग",
        step3: "भुगतान",
        otp: {
            title: "अपना मोबाइल नंबर सत्यापित करें",
            subtitle: "हम आपके फोन पर एक वन-टाइम पासवर्ड भेजेंगे।",
            phoneLabel: "10-अंकीय मोबाइल नंबर",
            phonePlaceholder: "अपना मोबाइल नंबर दर्ज करें",
            sendButton: "ओटीपी भेजें",
            enterOtpTitle: "ओटीपी दर्ज करें",
            enterOtpSubtitle: "{phoneNumber} पर भेजा गया 6-अंकीय कोड दर्ज करें",
            otpLabel: "वन-टाइम पासवर्ड",
            otpPlaceholder: "6-अंकीय ओटीपी दर्ज करें",
            verifyButton: "सत्यापित करें और आगे बढ़ें"
        },
        address: {
            title: "शिपिंग पता",
            subtitle: "हमें आपका ऑर्डर कहां भेजना चाहिए?",
            fullName: "पूरा नाम",
            addressLine: "पता (घर नंबर, बिल्डिंग, गली, क्षेत्र)",
            city: "शहर",
            state: "राज्य",
            pincode: "पिन कोड",
            saveButton: "सहेजें और जारी रखें"
        },
        shippingTo: "शिपिंग पता"
    },
    deleteConfirmation: {
      "title": "हटाने की पुष्टि करें",
      "message": "क्या आप वाकई '{productName}' को हटाना चाहते हैं? यह कार्रवाई पूर्ववत नहीं की जा सकती।",
      "confirmButton": "उत्पाद हटाएं",
      "cancelButton": "रद्द करें"
    },
    deleteProductModal: {
      title: "आवाज़ से उत्पाद हटाएं",
      prompt: "हटाने के लिए उत्पाद का नाम बोलें।",
      deleted: "उत्पाद हटा दिया गया।",
      cancelled: "हटाना रद्द कर दिया गया।"
    },
    voiceAssistant: {
        ui: {
            tooltip: "वॉइस असिस्टेंट सक्रिय करें",
            listening: "सुन रहा है...",
            processing: "संसाधित हो रहा है...",
            talkToAI: "AI से बात करें"
        },
        responses: {
            greeting: "नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूँ?",
            commandNotFound: "माफ़ कीजिए, मुझे समझ नहीं आया। कृपया फिर से प्रयास करें।",
            addProduct: {
                promptForImage: "ज़रूर। कृपया अपने नए उत्पाद की एक से पांच तस्वीरें अपलोड करें। मैं आपके लिए तस्वीरों से स्वचालित रूप से विवरण तैयार कर दूँगा।",
                generating: "धन्यवाद। मैं अब AI के साथ उत्पाद विवरण तैयार कर रहा हूँ। इसमें कुछ समय लग सकता है।",
                promptForReview: "मैंने उत्पाद विवरण बना दिए हैं। कृपया अपनी स्क्रीन पर उनकी समीक्षा करें। यदि आवश्यक हो तो आप बदलाव कर सकते हैं। जब आप तैयार हों, तो प्रकाशित करें बटन दबाएं।"
            },
            deleteProduct: {
                promptForSelection: "आप कौन सा उत्पाद हटाना चाहेंगे? कृपया इसे चुनें।",
                noProducts: "आपके पास हटाने के लिए कोई उत्पाद नहीं है।",
                promptForName: "आप कौन सा उत्पाद हटाना चाहेंगे? कृपया उसका नाम बोलें।",
                productNotFound: "मुझे उस नाम का कोई उत्पाद नहीं मिला। कृपया फिर से प्रयास करें।",
                deleted: "ठीक है, मैंने '{productName}' को हटा दिया है।",
                cancelled: "ठीक है, मैंने हटाना रद्द कर दिया है।"
            },
            confirmation: {
                yes: "हाँ,हां,यस,ठीक है",
                no: "नहीं,नो,ना,रद्द करें"
            }
        },
        commands: {
            addProduct: "नया उत्पाद जोड़ें,उत्पाद बनाएं,नया आइटम,उत्पाद जोड़ें,एक नया उत्पाद जोड़ें,नया उत्पाद बनाएं,मुझे एक नया उत्पाद जोड़ना है,एक आइटम जोड़ें,मुझे एक नया प्रोडक्ट ऐड करना है,नया प्रोडक्ट जोड़ो,प्रोडक्ट ऐड करें",
            deleteProduct: "उत्पाद हटाएं,उत्पाद हटाओ,आइटम हटाएं,एक उत्पाद हटाएं,मैं एक उत्पाद हटाना चाहता हूं"
        }
    },
    accountSettings: {
        title: "अकाउंट सेटिंग",
        backToDashboard: "डैशबोर्ड पर वापस जाएं",
        memberSince: "सदस्य जब से",
        totalOrders: "कुल ऑर्डर"
    },
    shilpoPlus: {
        title: "शिल्पो+",
        subtitle: "प्रीमियम लाभ अनलॉक करें",
        benefit1: "योग्य वस्तुओं पर तेज़ डिलीवरी",
        benefit2: "नई शिल्पों और संग्रहों तक जल्दी पहुंच",
        benefit3: "विशेष सदस्य-मात्र मूल्य",
        cta: "शिल्पो+ में अपग्रेड करें",
        comingSoon: "जल्द आ रहा है!"
    }
  },
  bn: {
    common: { getStarted: "শুরু করুন", edit: "সম্পাদনা", save: "সংরক্ষণ", add: "যোগ করুন", publish: "প্রকাশ করুন", cancel: "বাতিল", close: "বন্ধ করুন", delete: "মুছুন" },
    nav: { features: "বৈশিষ্ট্য", howItWorks: "কিভাবে কাজ করে", testimonials: "প্রশংসাপত্র" },
    hero: { title: { line1: "হাতে তৈরি,", line2: "AI চালিত।" }, subtitle: "প্রতিভাবান কারিগরদের অনন্য, হস্তনির্মিত ধন ценящих গ্রাহকদের সাথে সংযোগকারী AI-চালিত মার্কেটপ্লেস।", cta: { join: "মার্কেটপ্লেসে যোগ দিন", explore: "বৈশিষ্ট্যগুলি অন্বেষণ করুন" } },
    artisanSignup: { existingMember: "ইতিমধ্যে একজন সদস্য?", signInHere: "এখানে সাইন ইন করুন" },
    customerSignup: { existingMember: "ইতিমধ্যে একজন সদস্য?", signInHere: "এখানে সাইন ইন করুন" },
    artisanSignIn: { title: "কারিগর হিসাবে সাইন ইন করুন", subtitle: "আবারও স্বাগতম! আপনার ড্যাশবোর্ড অ্যাক্সেস করুন।", back: "হোমে ফিরে যান", labels: { name: "পুরো নাম" }, placeholders: { name: "আপনার নিবন্ধিত নাম লিখুন" }, button: "সাইন ইন করুন", newMember: "প্ল্যাটফর্মে নতুন?", signUpHere: "এখানে সাইন আপ করুন", errors: { name: "অনুগ্রহ করে আপনার পুরো নাম লিখুন।", loginFailed: "এই নামে কোনো কারিগর খুঁজে পাওয়া যায়নি।" } },
    customerSignIn: { title: "আপনার অ্যাকাউন্টে সাইন ইন করুন", subtitle: "আবারও স্বাগতম! হস্তনির্মিত শিল্পকর্ম অন্বেষণ করুন।", back: "হোমে ফিরে যান", labels: { email: "ইমেল ঠিকানা", password: "পাসওয়ার্ড" }, placeholders: { email: "उदा., priya@example.com", password: "আপনার পাসওয়ার্ড লিখুন" }, button: "সাইন ইন করুন", newMember: "প্ল্যাটফর্মে নতুন?", signUpHere: "এখানে সাইন আপ করুন", errors: { email: "অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা লিখুন।", password: "পাসওয়ার্ড খালি রাখা যাবে না।", loginFailed: "অবৈধ শংসাপত্র।" } },
    dashboard: {
        greeting: {
            morning: "সুপ্রভাত, {name}!",
            afternoon: "শুভ অপরাহ্ন, {name}!",
            evening: "শুভ সন্ধ্যা, {name}!",
        },
        subtitle: "এটি আপনার সৃজনশীল কেন্দ্র। পণ্য পরিচালনা করুন, বিক্রয় দেখুন, এবং আপনার গল্প বিশ্বের সাথে ভাগ করুন।",
        logout: "লগ আউট",
        addNewProduct: "নতুন পণ্য যোগ করুন",
        deleteProduct: "পণ্য মুছুন",
        sales: { title: "বিক্রয় এক নজরে", totalSales: "মোট বিক্রয়", orders: "অর্ডার", productsSold: "বিক্রিত পণ্য" },
        story: { title: "আমার গল্প", placeholder: "আপনার শিল্প, আপনার অনুপ্রেরণা এবং আপনার ঐতিহ্যের গল্প বলুন। গ্রাহকদের সাথে ব্যক্তিগত স্তরে সংযোগ স্থাপনের এটি আপনার সুযোগ।" },
        products: { title: "আমার পণ্য", emptyState: "আপনি এখনও কোনো পণ্য যোগ করেননি। চলুন আপনার প্রথমটি যোগ করি!" },
        addProductModal: {
            title: "একটি নতুন পণ্য যোগ করুন",
            step1: { title: "পণ্যের ছবি আপলোড করুন", uploadLabel: "৫টি পর্যন্ত ছবি আপলোড করুন। প্রথমটি আপনার প্রধান ছবি।", generate: "ছবি থেকে বিবরণ তৈরি করুন" },
            step2: { title: "বিস্তারিত তৈরি হচ্ছে...", message: "আমাদের AI আপনার পণ্যের জন্য একটি সুন্দর তালিকা তৈরি করছে। এতে কিছুক্ষণ সময় লাগতে পারে।" },
            step3: { title: "পর্যালোচনা ও প্রকাশ করুন", subtitle: "আপনার AI-জেনারেটেড পণ্যের বিবরণ প্রস্তুত। প্রকাশ করার আগে সেগুলি সম্পাদনা করতে পারেন।", labels: { title: "পণ্যের শিরোনাম", description: "পণ্যের বিবরণ", story: "এর পেছনের গল্প", price: "প্রস্তাবিত মূল্য (INR)", tags: "ট্যাগ / কীওয়ার্ড" }, productAddedSuccess: "পণ্য সফলভাবে যোগ করা হয়েছে!" },
            errors: { noImage: "অনুগ্রহ করে অন্তত একটি পণ্যের ছবি আপলোড করুন।", generationFailed: "AI বিবরণ তৈরি করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।" }
        },
        selectionBanner: {
          title: "মুছে ফেলার জন্য একটি পণ্য নির্বাচন করুন",
          cancel: "বাতিল"
        }
    },
    customerDashboard: {
        greeting: "স্বাগতম, {name}!",
        searchPlaceholder: "মাটির পাত্র, বস্ত্র, শিল্প অনুসন্ধান করুন...",
        noResults: "'{query}' এর জন্য কোনও শিল্পকর্ম পাওয়া যায়নি",
        emptyState: "বাজারটি সবে শুরু হচ্ছে! আশ্চর্যজনক কারুশিল্পের জন্য শীঘ্রই আবার দেখুন।",
        browseAll: "সমস্ত কারুশিল্প ব্রাউজ করুন",
        allProducts: "সমস্ত পণ্য",
        addToCart: "কার্টে যোগ করুন",
        buyNow: "এখনই কিনুন",
        quantity: "পরিমাণ",
        viewDetails: "বিবরণ দেখুন",
        tabs: {
          browse: "পণ্য ব্রাউজ করুন",
          myOrders: "আমার অর্ডার"
        },
        filters: { title: "বিভাগ", all: "সব", pottery: "মাটির পাত্র", art: "শিল্প ও চিত্রকলা", clothing: "বস্ত্র ও পোশাক", jewellery: "গয়না" },
        sort: { title: "সাজান", newest: "নতুন поступন", priceAsc: "মূল্য: কম থেকে বেশি", priceDesc: "মূল্য: বেশি থেকে কম" },
        accountSettings: "অ্যাকাউন্ট সেটিংস"
    },
    orders: {
      title: "আমার অর্ডার",
      emptyState: "আপনি এখনো কোনো অর্ডার দেননি।",
      emptyStateSubtext: "আপনার পরবর্তী হস্তনির্মিত ধন খুঁজে পেতে ব্রাউজ করা শুরু করুন!",
      orderId: "অর্ডার আইডি",
      orderDate: "অর্ডারের তারিখ",
      totalAmount: "মোট পরিমাণ",
      status: "অবস্থা",
      orderDetails: "অর্ডারের বিবরণ",
      itemsInOrder: "এই অর্ডারে থাকা আইটেম",
      priceBreakdown: "মূল্যের বিবরণ",
      expectedDelivery: "প্রত্যাশিত ডেলিভারি",
      deliveryTracker: "ডেলিভারি ট্র্যাকার",
      statusTypes: {
        ordered: "অর্ডার করা হয়েছে",
        packed: "প্যাক করা হয়েছে",
        shipped: "পাঠানো হয়েছে",
        delivered: "পৌঁছে দেওয়া হয়েছে"
      }
    },
    cart: { title: "আপনার শপিং কার্ট", empty: "আপনার কার্ট খালি।", total: "মোট", checkout: "চেকআউট করতে এগিয়ে যান", remove: "সরান", itemAdded: "পণ্য কার্টে যোগ করা হয়েছে!", itemRemoved: "পণ্য কার্ট থেকে সরানো হয়েছে।" },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "নিরাপদ চেকআউট",
        orderSummary: "অর্ডার সারাংশ",
        subtotal: "উপমোট",
        shipping: "শিপিং",
        shippingFree: "বিনামূল্যে",
        total: "মোট",
        totalPayable: "মোট প্রদেয়",
        paymentMethod: "পেমেন্ট পদ্ধতি",
        methods: {
            card: "ক্রেডিট/ডেবিট কার্ড",
            upi: "UPI",
            netbanking: "নেট ব্যাংকিং"
        },
        cardForm: {
            number: "কার্ড নম্বর",
            holder: "কার্ডধারীর নাম",
            expiry: "মেয়াদ (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "পেমেন্ট করতে QR স্ক্যান করুন",
            or: "অথবা",
            enterId: "UPI ID লিখুন",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "আপনার ব্যাংক নির্বাচন করুন",
            banks: ["স্টেট ব্যাংক অফ ইন্ডিয়া", "এইচডিএফসি ব্যাংক", "আইসিআইসিআই ব্যাংক", "অ্যাক্সিস ব্যাংক", "পাঞ্জাব ন্যাশনাল ব্যাংক"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "নিরাপদভাবে অর্থ প্রদান করুন",
        processing: "পেমেন্ট প্রক্রিয়া চলছে...",
        success: "পেমেন্ট সফল!",
        successMessage: "আপনার অর্ডার নিশ্চিত করা হয়েছে। স্থানীয় কারিগরদের সমর্থন করার জন্য ধন্যবাদ!",
        continueShopping: "কেনাকাটা চালিয়ে যান",
        step1: "যাচাই",
        step2: "শিপিং",
        step3: "পেমেন্ট",
        otp: { title: "আপনার মোবাইল নম্বর যাচাই করুন", subtitle: "আমরা আপনার ফোনে একটি ওটিপি পাঠাব।", phoneLabel: "১০-সংখ্যার মোবাইল নম্বর", phonePlaceholder: "আপনার মোবাইল নম্বর লিখুন", sendButton: "ওটিপি পাঠান", enterOtpTitle: "ওটিপি লিখুন", enterOtpSubtitle: "{phoneNumber}-এ পাঠানো ৬-সংখ্যার কোডটি লিখুন", otpLabel: "ওটিপি", otpPlaceholder: "৬-সংখ্যার ওটিপি লিখুন", verifyButton: "যাচাই করুন এবং এগিয়ে যান" },
        address: { title: "শিপিং ঠিকানা", subtitle: "আমরা আপনার অর্ডার কোথায় পাঠাব?", fullName: "পুরো নাম", addressLine: "ঠিকানা (বাড়ি নং, বিল্ডিং, রাস্তা, এলাকা)", city: "শহর", state: "রাজ্য", pincode: "পিন কোড", saveButton: "সংরক্ষণ করুন এবং চালিয়ে যান" },
        shippingTo: "শিপিং ঠিকানা"
    },
    deleteConfirmation: {
      title: "মোছা নিশ্চিত করুন",
      message: "আপনি কি নিশ্চিত যে আপনি '{productName}' মুছতে চান? এই ক্রিয়াটি ফিরিয়ে আনা যাবে না।",
      confirmButton: "পণ্য মুছুন",
      cancelButton: "বাতিল"
    },
    deleteProductModal: {
      title: "ভয়েস দ্বারা পণ্য মুছুন",
      prompt: "মুছে ফেলার জন্য পণ্যের নাম বলুন।",
      deleted: "পণ্য মুছে ফেলা হয়েছে।",
      cancelled: "মোছা বাতিল করা হয়েছে।"
    },
     voiceAssistant: {
        ui: { tooltip: "ভয়েস অ্যাসিস্ট্যান্ট সক্রিয় করুন", listening: "শুনছি...", processing: "প্রসেস হচ্ছে...", talkToAI: "AI এর সাথে কথা বলুন" },
        responses: { 
            greeting: "নমস্কার! আমি আজ আপনাকে কিভাবে সাহায্য করতে পারি?",
            commandNotFound: "দুঃখিত, আমি বুঝতে পারিনি। অনুগ্রহ করে আবার চেষ্টা করুন।",
            addProduct: { 
                promptForImage: "অবশ্যই। অনুগ্রহ করে আপনার নতুন পণ্যের এক থেকে পাঁচটি ছবি আপলোড করুন। আমি ছবি থেকে স্বয়ংক্রিয়ভাবে আপনার জন্য বিবরণ তৈরি করব।", 
                generating: "ধন্যবাদ। আমি এখন AI দিয়ে পণ্যের বিবরণ তৈরি করছি। এতে কিছুক্ষণ সময় লাগতে পারে।",
                promptForReview: "আমি পণ্যের বিবরণ তৈরি করেছি। অনুগ্রহ করে আপনার স্ক্রিনে সেগুলি পর্যালোচনা করুন। প্রয়োজন হলে আপনি পরিবর্তন করতে পারেন। আপনি প্রস্তুত হলে, প্রকাশ করুন বোতাম টিপুন।"
            },
            deleteProduct: {
                promptForSelection: "আপনি কোন পণ্যটি মুছতে চান? অনুগ্রহ করে এটি নির্বাচন করুন।",
                noProducts: "আপনার মোছার জন্য কোনো পণ্য নেই।",
                promptForName: "আপনি কোন পণ্যটি মুছতে চান? অনুগ্রহ করে তার নাম বলুন।",
                productNotFound: "আমি সেই নামের কোনো পণ্য খুঁজে পাইনি। অনুগ্রহ করে আবার চেষ্টা করুন।",
                deleted: "ঠিক আছে, আমি '{productName}' মুছে ফেলেছি।",
                cancelled: "ঠিক আছে, আমি মোছা বাতিল করেছি।"
            },
            confirmation: {
                yes: "হ্যাঁ,হ্যা,নিশ্চিত",
                no: "না,বাতিল,বন্ধ করুন"
            }
        },
        commands: { 
            addProduct: "নতুন পণ্য যোগ করুন,পণ্য তৈরি করুন,নতুন আইটেম,একটি নতুন পণ্য যোগ করতে চাই,নতুন জিনিস যোগ করুন",
            deleteProduct: "পণ্য মুছুন,পণ্য সরান,আইটেম মুছুন,একটি আইটেম সরান,আমি একটি পণ্য মুছতে চাই"
        }
    },
    accountSettings: {
        title: "অ্যাকাউন্ট সেটিংস",
        backToDashboard: "ড্যাশবোর্ডে ফিরে যান",
        memberSince: "সদস্য",
        totalOrders: "মোট অর্ডার"
    },
    shilpoPlus: {
        title: "শিল্প+",
        subtitle: "প্রিমিয়াম সুবিধা আনলক করুন",
        benefit1: "যোগ্য আইটেমগুলিতে দ্রুত ডেলিভারি",
        benefit2: "নতুন শিল্প এবং সংগ্রহে তাড়াতাড়ি অ্যাক্সেস",
        benefit3: "একচেটিয়া সদস্য-শুধু দাম",
        cta: "শিল্প+ এ আপগ্রেড করুন",
        comingSoon: "শীঘ্রই আসছে!"
    }
  },
  ta: {
    common: { getStarted: "தொடங்கவும்", edit: "திருத்து", save: "சேமி", add: "சேர்", publish: "வெளியிடு", cancel: "ரத்துசெய்", close: "மூடு", delete: "நீக்கு" },
    nav: { features: "அம்சங்கள்", howItWorks: "எப்படி செயல்படுகிறது", testimonials: "பாராட்டுரைகள்" },
    hero: { title: { line1: "கைகளால் வடிவமைக்கப்பட்டது,", line2: "AI மூலம் இயக்கப்படுகிறது." }, subtitle: "திறமையான கைவினைஞர்களை தனித்துவமான, கையால் செய்யப்பட்ட புதையல்களைப் போற்றும் வாடிக்கையாளர்களுடன் இணைக்கும் AI-இயங்கும் சந்தை.", cta: { join: "சந்தையில் சேரவும்", explore: "அம்சங்களை ஆராயுங்கள்" } },
    artisanSignup: { existingMember: "ஏற்கனவே உறுப்பினரா?", signInHere: "இங்கே உள்நுழையவும்" },
    customerSignup: { existingMember: "ஏற்கனவே உறுப்பினரா?", signInHere: "இங்கே உள்நுழையவும்" },
    artisanSignIn: { title: "கைவினைஞராக உள்நுழையவும்", subtitle: "மீண்டும் வருக! உங்கள் டாஷ்போர்டை அணுகவும்.", back: "முகப்புக்குத் திரும்பு", labels: { name: "முழு பெயர்" }, placeholders: { name: "உங்கள் பதிவு செய்யப்பட்ட பெயரை உள்ளிடவும்" }, button: "உள்நுழை", newMember: "தளத்திற்கு புதியவரா?", signUpHere: "இங்கே பதிவு செய்யவும்", errors: { name: "தயவுசெய்து உங்கள் முழு பெயரை உள்ளிடவும்.", loginFailed: "இந்த பெயரில் கைவினைஞர் யாரும் இல்லை." } },
    customerSignIn: { title: "உங்கள் கணக்கில் உள்நுழையவும்", subtitle: "மீண்டும் வருக! கையால் செய்யப்பட்ட கைவினைப்பொருட்களை ஆராயுங்கள்.", back: "முகப்புக்குத் திரும்பு", labels: { email: "மின்னஞ்சல் முகவரி", password: "கடவுச்சொல்" }, placeholders: { email: "உதாரணமாக, priya@example.com", password: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்" }, button: "உள்நுழை", newMember: "தளத்திற்கு புதியவரா?", signUpHere: "இங்கே பதிவு செய்யவும்", errors: { email: "தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.", password: "கடவுச்சொல் காலியாக இருக்கக்கூடாது.", loginFailed: "தவறான நற்சான்றிதழ்கள்." } },
     dashboard: {
        greeting: {
            morning: "காலை வணக்கம், {name}!",
            afternoon: "மதிய வணக்கம், {name}!",
            evening: "மாலை வணக்கம், {name}!",
        },
        subtitle: "இது உங்கள் படைப்பு மையம். தயாரிப்புகளை நிர்வகிக்கவும், விற்பனையைக் காணவும், உங்கள் கதையை உலகுடன் பகிர்ந்து கொள்ளவும்.",
        logout: "வெளியேறு",
        addNewProduct: "புதிய தயாரிப்பைச் சேர்",
        deleteProduct: "பொருளை நீக்கு",
        sales: { title: "விற்பனை ഒറ്റനോட்டത്തിൽ", totalSales: "மொத்த விற்பனை", orders: "ஆர்டர்கள்", productsSold: "விற்கப்பட்ட தயாரிப்புகள்" },
        story: { title: "என் கதை", placeholder: "உங்கள் கைவினை, உங்கள் உத்வேகம் மற்றும் உங்கள் பாரம்பரியத்தின் கதையைப் பகிர்ந்து கொள்ளுங்கள். இது வாடிக்கையாளர்களுடன் தனிப்பட்ட மட்டத்தில் இணைய உங்களுக்கு ஒரு வாய்ப்பு." },
        products: { title: "என் தயாரிப்புகள்", emptyState: "நீங்கள் இன்னும் எந்த தயாரிப்புகளையும் சேர்க்கவில்லை. உங்கள் முதல் தயாரிப்பைச் சேர்ப்போம்!" },
        addProductModal: {
            title: "ஒரு புதிய தயாரிப்பைச் சேர்",
            step1: { title: "தயாரிப்பு புகைப்படங்களை பதிவேற்றவும்", uploadLabel: "5 புகைப்படங்கள் வரை பதிவேற்றவும். முதலாவது உங்கள் முக்கிய படம்.", generate: "படங்களிலிருந்து விவரங்களை உருவாக்கவும்" },
            step2: { title: "விவரங்கள் உருவாக்கப்படுகின்றன...", message: "எங்கள் AI உங்கள் தயாரிப்புக்கு ஒரு அழகான பட்டியலை உருவாக்குகிறது. இதற்கு சிறிது நேரம் ஆகலாம்." },
            step3: { title: "மதிப்பாய்வு செய்து வெளியிடவும்", subtitle: "உங்கள் AI-உருவாக்கிய தயாரிப்பு விவரங்கள் தயாராக உள்ளன. வெளியிடுவதற்கு முன் அவற்றைத் திருத்த தயங்க வேண்டாம்.", labels: { title: "தயாரிப்பு தலைப்பு", description: "தயாரிப்பு விவரம்", story: "அதன் பின்னணி கதை", price: "பரிந்துரைக்கப்பட்ட விலை (INR)", tags: "குறிச்சொற்கள் / కీలక வார்த்தைகள்" }, productAddedSuccess: "தயாரிப்பு வெற்றிகரமாக சேர்க்கப்பட்டது!" },
            errors: { noImage: "தயவுசெய்து குறைந்தபட்சம் ஒரு தயாரிப்புப் படத்தையாவது பதிவேற்றவும்.", generationFailed: "AI விவரங்களை உருவாக்கத் தவறிவிட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்." }
        },
        selectionBanner: {
          title: "நீக்க ஒரு தயாரிப்பைத் தேர்ந்தெடுக்கவும்",
          cancel: "ரத்துசெய்"
        }
    },
    customerDashboard: {
        greeting: "வரவேற்கிறோம், {name}!",
        searchPlaceholder: "மட்பாண்டங்கள், ஜவுளி, கலை என தேடவும்...",
        noResults: "'{query}' என்பதற்கு கைவினைப்பொருட்கள் எதுவும் இல்லை",
        emptyState: "சந்தை இப்போதுதான் தொடங்குகிறது! அற்புதமான கைவினைப்பொருட்களுக்கு விரைவில் மீண்டும் பார்க்கவும்.",
        browseAll: "அனைத்து கைவினைப்பொருட்களையும் உலாவுக",
        allProducts: "அனைத்து தயாரிப்புகள்",
        addToCart: "வண்டியில் சேர்",
        buyNow: "இப்போது வாங்கவும்",
        quantity: "அளவு",
        viewDetails: "விவரங்களைக் காண்க",
        tabs: {
          browse: "தயாரிப்புகளை உலாவுக",
          myOrders: "என் ஆர்டர்கள்"
        },
        filters: { title: "பிரிவுகள்", all: "அனைத்தும்", pottery: "மட்பாண்டம்", art: "கலை & ஓவியங்கள்", clothing: "ஆடை & ஜவுளி", jewellery: "நகைகள்" },
        sort: { title: "வரிசைப்படுத்து", newest: "புதியவை", priceAsc: "விலை: குறைவிலிருந்து அதிகம்", priceDesc: "விலை: அதிகத்திலிருந்து குறைவு" },
        accountSettings: "கணக்கு அமைப்புகள்"
    },
    orders: {
      title: "என் ஆர்டர்கள்",
      emptyState: "நீங்கள் இன்னும் எந்த ஆர்டரையும் செய்யவில்லை.",
      emptyStateSubtext: "உங்கள் அடுத்த கையால் செய்யப்பட்ட புதையலைக் கண்டுபிடிக்க உலாவத் தொடங்குங்கள்!",
      orderId: "ஆர்டர் ஐடி",
      orderDate: "ஆர்டர் தேதி",
      totalAmount: "மொத்த தொகை",
      status: "நிலை",
      orderDetails: "ஆர்டர் விவரங்கள்",
      itemsInOrder: "இந்த ஆர்டரில் உள்ள பொருட்கள்",
      priceBreakdown: "விலை விவரம்",
      expectedDelivery: "எதிர்பார்க்கப்படும் டெலிவரி",
      deliveryTracker: "டெலிவரி டிராக்கர்",
      statusTypes: {
        ordered: "ஆர்டர் செய்யப்பட்டது",
        packed: "பேக் செய்யப்பட்டது",
        shipped: "அனுப்பப்பட்டது",
        delivered: "டெலிவரி செய்யப்பட்டது"
      }
    },
    cart: { title: "உங்கள் ஷாப்பிங் கார்ட்", empty: "உங்கள் கார்ட் காலியாக உள்ளது.", total: "மொத்தம்", checkout: "செக் அவுட் செய்ய தொடரவும்", remove: "நீக்கு", itemAdded: "பொருள் வண்டியில் சேர்க்கப்பட்டது!", itemRemoved: "பொருள் வண்டியில் இருந்து நீக்கப்பட்டது." },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "பாதுகாப்பான செக்அவுட்",
        orderSummary: "ஆர்டர் சுருக்கம்",
        subtotal: "துணை మొత్తం",
        shipping: "கப்பல் போக்குவரத்து",
        shippingFree: "இலவசம்",
        total: "மொத்தம்",
        totalPayable: "மொத்த செலுத்த வேண்டிய தொகை",
        paymentMethod: "பணம் செலுத்தும் முறை",
        methods: {
            card: "கிரெடிட்/டெபிட் கார்டு",
            upi: "UPI",
            netbanking: "நிகர வங்கி"
        },
        cardForm: {
            number: "அட்டை எண்",
            holder: "அட்டைதாரர் பெயர்",
            expiry: "காலாவதி (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "பணம் செலுத்த QR ஐ ஸ்கேன் செய்யவும்",
            or: "அல்லது",
            enterId: "UPI ஐடியை உள்ளிடவும்",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "உங்கள் வங்கியைத் தேர்ந்தெடுக்கவும்",
            banks: ["பாரத ஸ்டேட் வங்கி", "HDFC வங்கி", "ICICI வங்கி", "ஆக்சிஸ் வங்கி", "பஞ்சாப் நேஷனல் வங்கி"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "பாதுகாப்பாக பணம் செலுத்துங்கள்",
        processing: "பணம் செயலாக்கப்படுகிறது...",
        success: "பணம் செலுத்துதல் வெற்றி!",
        successMessage: "உங்கள் ஆர்டர் உறுதி செய்யப்பட்டது. உள்ளூர் கைவினைஞர்களை ஆதரித்ததற்கு நன்றி!",
        continueShopping: "தொடர்ந்து ஷாப்பிங் செய்யுங்கள்",
        step1: "சரிபார்ப்பு",
        step2: "ஷிப்பிங்",
        step3: "பணம் செலுத்துதல்",
        otp: { title: "உங்கள் மொபைல் எண்ணைச் சரிபார்க்கவும்", subtitle: "உங்கள் ஃபோனுக்கு ஒரு முறை கடவுச்சொல்லை அனுப்புவோம்.", phoneLabel: "10-இலக்க மொபைல் எண்", phonePlaceholder: "உங்கள் மொபைல் எண்ணை உள்ளிடவும்", sendButton: "OTP அனுப்பு", enterOtpTitle: "OTP ஐ உள்ளிடவும்", enterOtpSubtitle: "{phoneNumber} க்கு அனுப்பப்பட்ட 6-இலக்க குறியீட்டை உள்ளிடவும்", otpLabel: "ஒரு முறை கடவுச்சொல்", otpPlaceholder: "6-இலக்க OTP ஐ உள்ளிடவும்", verifyButton: "சரிபார்த்து தொடரவும்" },
        address: { title: "ஷிப்பிங் முகவரி", subtitle: "உங்கள் ஆர்டரை நாங்கள் எங்கு அனுப்ப வேண்டும்?", fullName: "முழு பெயர்", addressLine: "முகவரி (வீட்டு எண், கட்டிடம், தெரு, பகுதி)", city: "நகரம்", state: "மாநிலம்", pincode: "பின் குறியீடு", saveButton: "சேமித்து தொடரவும்" },
        shippingTo: "ஷிப்பிంగ్ முகவரி"
    },
    deleteConfirmation: {
      title: "நீக்குதலை உறுதிப்படுத்தவும்",
      message: "'{productName}' ஐ நீக்க விரும்புகிறீர்கள் என்பது உறுதியா? இந்தச் செயலைச் செயல்தவிர்க்க முடியாது.",
      confirmButton: "பொருளை நீக்கு",
      cancelButton: "ரத்துசெய்"
    },
    deleteProductModal: {
      title: "குரல் மூலம் பொருளை நீக்கு",
      prompt: "நீக்க வேண்டிய பொருளின் பெயரைச் சொல்லுங்கள்.",
      deleted: "பொருள் நீக்கப்பட்டது.",
      cancelled: "நீக்குதல் ரத்து செய்யப்பட்டது."
    },
    voiceAssistant: {
        ui: { tooltip: "குரல் உதவியாளரைச் செயல்படுத்தவும்", listening: "கேட்கிறது...", processing: "செயலாக்கப்படுகிறது...", talkToAI: "AI உடன் பேசுங்கள்" },
        responses: {
            greeting: "வணக்கம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
            commandNotFound: "மன்னிக்கவும், எனக்குப் புரியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
            addProduct: {
                promptForImage: "நிச்சயமாக. உங்கள் புதிய தயாரிப்பின் ஒன்று முதல் ஐந்து புகைப்படங்களைப் பதிவேற்றவும். படங்களிலிருந்து உங்களுக்கான விவரங்களை நான் தானாகவே உருவாக்குவேன்.",
                generating: "நன்றி. நான் இப்போது AI மூலம் தயாரிப்பு விவரங்களை உருவாக்குகிறேன். இதற்கு சிறிது நேரம் ஆகலாம்.",
                promptForReview: "நான் தயாரிப்பு விவரங்களை உருவாக்கியுள்ளேன். உங்கள் திரையில் அவற்றை மதிப்பாய்வு செய்யவும். தேவைப்பட்டால் நீங்கள் மாற்றங்களைச் செய்யலாம். நீங்கள் தயாரானதும், வெளியிடு பொத்தானை அழுத்தவும்."
            },
            deleteProduct: {
                promptForSelection: "நீங்கள் எந்தப் பொருளை நீக்க விரும்புகிறீர்கள்? தயவுசெய்து அதைத் தேர்ந்தெடுக்கவும்.",
                noProducts: "நீக்குவதற்கு உங்களிடம் எந்தப் பொருளும் இல்லை.",
                promptForName: "நீங்கள் எந்தப் பொருளை நீக்க விரும்புகிறீர்கள்? தயவுசெய்து அதன் பெயரைச் சொல்லுங்கள்.",
                productNotFound: "அந்தப் பெயரில் எந்தப் பொருளையும் என்னால் கண்டுபிடிக்க முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
                deleted: "சரி, நான் '{productName}' ஐ நீக்கிவிட்டேன்.",
                cancelled: "சரி, நான் நீக்குதலை ரத்து செய்துவிட்டேன்."
            },
            confirmation: {
                yes: "ஆம்,சரி",
                no: "இல்லை,வேண்டாம்"
            }
        },
        commands: {
            addProduct: "புதிய தயாரிப்பைச் சேர்,தயாரிப்பை உருவாக்கு,புதிய பொருள்",
            deleteProduct: "பொருளை நீக்கு,பொருளை அகற்று"
        }
    },
    accountSettings: {
        title: "கணக்கு அமைப்புகள்",
        backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
        memberSince: "உறுப்பினர்",
        totalOrders: "மொத்த ஆர்டர்கள்"
    },
    shilpoPlus: {
        title: "ஷில்போ+",
        subtitle: "பிரீமியம் பலன்களைத் திறக்கவும்",
        benefit1: "தகுதியான பொருட்களுக்கு விரைவான டெலிவரி",
        benefit2: "புதிய கைவினைப்பொருட்கள் மற்றும் சேகரிப்புகளுக்கு ஆரம்பகால அணுகல்",
        benefit3: "பிரத்தியேக உறுப்பினர்-மட்டும் விலைகள்",
        cta: "ஷில்போ+ க்கு மேம்படுத்தவும்",
        comingSoon: "விரைவில்!"
    }
  },
  te: {
    common: { getStarted: "ప్రారంభించండి", edit: "సవరించు", save: "సేవ్ చేయి", add: "జోడించు", publish: "ప్రచురించు", cancel: "రద్దు చేయి", close: "మూసివేయి", delete: "తొలగించు" },
    nav: { features: "ఫీచర్లు", howItWorks: "ఎలా పనిచేస్తుంది", testimonials: "టెస్టిమోనియల్స్" },
    hero: { title: { line1: "చేతులతో రూపొందించబడింది,", line2: "AI ద్వారా ఆధారితం." }, subtitle: "ప్రతిభావంతులైన కళాకారులను ప్రత్యేకమైన, చేతితో తయారు చేసిన నిధులను ఆదరించే కస్టమర్లతో కనెక్ట్ చేసే AI-ఆధారిత మార్కెట్‌ప్లేస్.", cta: { join: "మార్కెట్‌ప్లేస్‌లో చేరండి", explore: "ఫీచర్లను అన్వేషించండి" } },
    artisanSignup: { existingMember: "ఇప్పటికే సభ్యులా?", signInHere: "ఇక్కడ సైన్ ఇన్ చేయండి" },
    customerSignup: { existingMember: "ఇప్పటికే సభ్యులా?", signInHere: "ఇక్కడ సైన్ ఇన్ చేయండి" },
    artisanSignIn: { title: "కళాకారుడిగా సైన్ ఇన్ చేయండి", subtitle: "తిరిగి స్వాగతం! మీ డాష్‌బోర్డ్‌ను యాక్సెస్ చేయండి.", back: "హోమ్‌కు తిరిగి వెళ్ళు", labels: { name: "పూర్తి పేరు" }, placeholders: { name: "మీ నమోదిత పేరును నమోదు చేయండి" }, button: "సైన్ ఇన్ చేయి", newMember: "ప్లాట్‌ఫారమ్‌కు కొత్తా?", signUpHere: "ఇక్కడ సైన్ అప్ చేయండి", errors: { name: "దయచేసి మీ పూర్తి పేరును నమోదు చేయండి.", loginFailed: "ఈ పేరుతో కళాకారుడు కనుగొనబడలేదు." } },
    customerSignIn: { title: "మీ ఖాతాకు సైన్ ఇన్ చేయండి", subtitle: "తిరిగి స్వాగతం! చేతితో తయారు చేసిన చేతిపనులను అన్వేషించండి.", back: "హోమ్‌కు తిరిగి వెళ్ళు", labels: { email: "ఇమెయిల్ చిరునామా", password: "పాస్వర్డ్" }, placeholders: { email: "ఉదా., priya@example.com", password: "మీ పాస్వర్డ్ను నమోదు చేయండి" }, button: "సైన్ ఇన్ చేయి", newMember: "ప్లాట్‌ఫారమ్‌కు కొత్తా?", signUpHere: "ఇక్కడ సైన్ అప్ చేయండి", errors: { email: "దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామాను నమోదు చేయండి.", password: "పాస్వర్డ్ ఖాళీగా ఉండకూడదు.", loginFailed: "చెల్లని ఆధారాలు." } },
    dashboard: {
        greeting: {
            morning: "శుభోదయం, {name}!",
            afternoon: "శుభ మధ్యాహ్నం, {name}!",
            evening: "శుభ సాయంత్రం, {name}!",
        },
        subtitle: "ఇది మీ సృజనాత్మక కేంద్రం. ఉత్పత్తులను నిర్వహించండి, అమ్మకాలను వీక్షించండి మరియు మీ కథను ప్రపంచంతో పంచుకోండి.",
        logout: "లాగ్ అవుట్",
        addNewProduct: "కొత్త ఉత్పత్తిని జోడించు",
        deleteProduct: "ఉత్పత్తిని తొలగించు",
        sales: { title: "అమ్మకాలు ఒక్క చూపులో", totalSales: "మొత్తం అమ్మకాలు", orders: "ఆర్డర్లు", productsSold: "అమ్మిన ఉత్పత్తులు" },
        story: { title: "నా కథ", placeholder: "మీ కళ, మీ ప్రేరణ మరియు మీ వారసత్వం యొక్క కథను పంచుకోండి. వినియోగదారులతో వ్యక్తిగత స్థాయిలో కనెక్ట్ అవ్వడానికి ఇది మీకు అవకాశం." },
        products: { title: "నా ఉత్పత్తులు", emptyState: "మీరు ఇంకా ఏ ఉత్పత్తులను జోడించలేదు. మీ మొదటిదాన్ని జోడిద్దాం!" },
        addProductModal: {
            title: "ఒక కొత్త ఉత్పత్తిని జోడించు",
            step1: { title: "ఉత్పత్తి ఫోటోలను అప్‌లోడ్ చేయండి", uploadLabel: "5 ఫోటోల వరకు అప్‌లోడ్ చేయండి. మొదటిది మీ ప్రధాన చిత్రం.", generate: "చిత్రాల నుండి వివరాలను రూపొందించండి" },
            step2: { title: "వివరాలు రూపొందించబడుతున్నాయి...", message: "మా AI మీ ఉత్పత్తి కోసం ఒక అందమైన జాబితాను రూపొందిస్తోంది. దీనికి కొంత సమయం పట్టవచ్చు." },
            step3: { title: "సమీక్షించి & ప్రచురించండి", subtitle: "మీ AI- రూపొందించిన ఉత్పత్తి వివరాలు సిద్ధంగా ఉన్నాయి. ప్రచురించే ముందు వాటిని సవరించడానికి సంకోచించకండి.", labels: { title: "ఉత్పత్తి శీర్షిక", description: "ఉత్పత్తి వివరణ", story: "దాని వెనుక కథ", price: "సూచించిన ధర (INR)", tags: "ట్యాగ్‌లు / కీలకపదాలు" }, productAddedSuccess: "ఉత్పత్తి విజయవంతంగా జోడించబడింది!" },
            errors: { noImage: "దయచేసి కనీసం ఒక ఉత్పత్తి చిత్రాన్ని అప్‌లోడ్ చేయండి.", generationFailed: "AI వివరాలను రూపొందించడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి." }
        },
        selectionBanner: {
          title: "తొలగించడానికి ఒక ఉత్పత్తిని ఎంచుకోండి",
          cancel: "రద్దు చేయి"
        }
    },
    customerDashboard: {
        greeting: "స్వాగతం, {name}!",
        searchPlaceholder: "కుండలు, వస్త్రాలు, కళ కోసం శోధించండి...",
        noResults: "'{query}' కోసం ఏ చేతిపనులు కనుగొనబడలేదు",
        emptyState: "మార్కెట్ ఇప్పుడే ప్రారంభమవుతోంది! అద్భుతమైన చేతిపనుల కోసం త్వరలో మళ్లీ తనిఖీ చేయండి.",
        browseAll: "అన్ని చేతిపనులను బ్రౌజ్ చేయండి",
        allProducts: "అన్ని ఉత్పత్తులు",
        addToCart: "కార్ట్‌కు జోడించు",
        buyNow: "ఇప్పుడే కొనండి",
        quantity: "పరిమాణం",
        viewDetails: "వివరాలు చూడండి",
        tabs: {
          browse: "ఉత్పత్తులను బ్రౌజ్ చేయండి",
          myOrders: "నా ఆర్డర్లు"
        },
        filters: { title: "వర్గాలు", all: "అన్నీ", pottery: "కుండలు", art: "కళ & చిత్రలేఖనాలు", clothing: "వస్త్రాలు & దుస్తులు", jewellery: "ఆభరణాలు" },
        sort: { title: "క్రమబద్ధీకరించు", newest: "కొత్తవి", priceAsc: "ధర: తక్కువ నుండి ఎక్కువ", priceDesc: "ధర: ఎక్కువ నుండి తక్కువ" },
        accountSettings: "ఖాతా సెట్టింగ్‌లు"
    },
    orders: {
      title: "నా ఆర్డర్లు",
      emptyState: "మీరు ఇంకా ఏ ఆర్డర్‌లు చేయలేదు.",
      emptyStateSubtext: "మీ తదుపరి చేతితో తయారు చేసిన నిధిని కనుగొనడానికి బ్రౌజింగ్ ప్రారంభించండి!",
      orderId: "ఆర్డర్ ID",
      orderDate: "ఆర్డర్ తేదీ",
      totalAmount: "మొత్తం మొత్తం",
      status: "స్థితి",
      orderDetails: "ఆర్డర్ వివరాలు",
      itemsInOrder: "ఈ ఆర్డర్‌లోని వస్తువులు",
      priceBreakdown: "ధరల విభజన",
      expectedDelivery: "అપેಕ್ಷಿತ డెలివరీ",
      deliveryTracker: "డెలివరీ ట్రాకర్",
      statusTypes: {
        ordered: "ఆర్డర్ చేయబడింది",
        packed: "ప్యాక్ చేయబడింది",
        shipped: "షిప్పింగ్ చేయబడింది",
        delivered: "డెలివరీ చేయబడింది"
      }
    },
    cart: { title: "మీ షాపింగ్ కార్ట్", empty: "మీ కార్ట్ ఖాళీగా ఉంది.", total: "మొత్తం", checkout: "చెక్అవుట్ చేయడానికి కొనసాగండి", remove: "తొలగించు", itemAdded: "వస్తువు కార్ట్‌కు జోడించబడింది!", itemRemoved: "వస్తువు కార్ట్ నుండి తీసివేయబడింది." },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "సురక్షిత చెక్అవుట్",
        orderSummary: "ఆర్డర్ సారాంశం",
        subtotal: "ఉపమొత్తం",
        shipping: "షిప్పింగ్",
        shippingFree: "ఉచితం",
        total: "మొత్తం",
        totalPayable: "మొత్తం చెల్లించవలసినది",
        paymentMethod: "చెల్లింపు పద్ధతి",
        methods: {
            card: "క్రెడిట్/డెబిట్ కార్డ్",
            upi: "UPI",
            netbanking: "నెట్ బ్యాంకింగ్"
        },
        cardForm: {
            number: "కార్డ్ నంబర్",
            holder: "కార్డుదారుని పేరు",
            expiry: "గడువు (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "చెల్లించడానికి QRను స్కాన్ చేయండి",
            or: "లేదా",
            enterId: "UPI IDని నమోదు చేయండి",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "మీ బ్యాంకును ఎంచుకోండి",
            banks: ["స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా", "HDFC బ్యాంక్", "ICICI బ్యాంక్", "యాక్సిస్ బ్యాంక్", "పంజాబ్ నేషనల్ బ్యాంక్"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "సురక్షితంగా చెల్లించండి",
        processing: "చెల్లింపు ప్రాసెస్ అవుతోంది...",
        success: "చెల్లింపు విజయవంతమైంది!",
        successMessage: "మీ ఆర్డర్ నిర్ధారించబడింది. స్థానిక కళాకారులకు మద్దతు ఇచ్చినందుకు ధన్యవాదాలు!",
        continueShopping: "కొనుగోలు కొనసాగించండి",
        step1: "ధృవీకరణ",
        step2: "షిప్పింగ్",
        step3: "చెల్లింపు",
        otp: { title: "మీ మొబైల్ నంబర్‌ను ధృవీకరించండి", subtitle: "మేము మీ ఫోన్‌కు వన్-టైమ్ పాస్‌వర్డ్‌ను పంపుతాము.", phoneLabel: "10-అంకెల మొబైల్ నంబర్", phonePlaceholder: "మీ మొబైల్ నంబర్‌ను నమోదు చేయండి", sendButton: "OTP పంపండి", enterOtpTitle: "OTPని నమోదు చేయండి", enterOtpSubtitle: "{phoneNumber}కు పంపిన 6-అంకెల కోడ్‌ను నమోదు చేయండి", otpLabel: "వన్-టైమ్ పాస్‌వర్డ్", otpPlaceholder: "6-అంకెల OTPని నమోదు చేయండి", verifyButton: "ధృవీకరించి కొనసాగండి" },
        address: { title: "షిప్పింగ్ చిరునామా", subtitle: "మేము మీ ఆర్డర్‌ను ఎక్కడికి పంపాలి?", fullName: "పూర్తి పేరు", addressLine: "చిరునామా (ఇంటి నం, భవనం, వీధి, ప్రాంతం)", city: "నగరం", state: "రాష్ట్రం", pincode: "పిన్ కోడ్", saveButton: "సేవ్ చేసి కొనసాగండి" },
        shippingTo: "షిప్పింగ్ చిరునామా"
    },
    deleteConfirmation: {
      title: "తొలగింపును నిర్ధారించండి",
      message: "'{productName}'ని తొలగించాలనుకుంటున్నారని మీరు ఖచ్చితంగా అనుకుంటున్నారా? ఈ చర్యను రద్దు చేయడం సాధ్యం కాదు.",
      confirmButton: "ఉత్పత్తిని తొలగించు",
      cancelButton: "రద్దు చేయి"
    },
    deleteProductModal: {
      title: "వాయిస్ ద్వారా ఉత్పత్తిని తొలగించు",
      prompt: "తొలగించాల్సిన ఉత్పత్తి పేరు చెప్పండి.",
      deleted: "ఉత్పత్తి తొలగించబడింది.",
      cancelled: "తొలగింపు రద్దు చేయబడింది."
    },
     voiceAssistant: {
        ui: { tooltip: "వాయిస్ అసిస్టెంట్‌ని సక్రియం చేయండి", listening: "వినడం...", processing: "ప్రాసెస్ అవుతోంది...", talkToAI: "AIతో మాట్లాడండి" },
        responses: { 
            greeting: "నమస్కారం! నేను ఈ రోజు మీకు ఎలా సహాయపడగలను?",
            commandNotFound: "క్షమించండి, నాకు అర్థం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.",
            addProduct: { 
                promptForImage: "తప్పకుండా. దయచేసి మీ కొత్త ఉత్పత్తి యొక్క ఒకటి నుండి ఐదు ఫోటోలను అప్‌లోడ్ చేయండి. నేను చిత్రాల నుండి మీ కోసం వివరాలను స్వయంచాలకంగా రూపొందిస్తాను.", 
                generating: "ధన్యవాదాలు. నేను ఇప్పుడు AIతో ఉత్పత్తి వివరాలను రూపొందిస్తున్నాను. దీనికి కొంత సమయం పట్టవచ్చు.",
                promptForReview: "నేను ఉత్పత్తి వివరాలను సృష్టించాను. దయచేసి వాటిని మీ స్క్రీన్‌పై సమీక్షించండి. అవసరమైతే మీరు మార్పులు చేయవచ్చు. మీరు సిద్ధంగా ఉన్నప్పుడు, ప్రచురించు బటన్‌ను నొక్కండి."
            },
            deleteProduct: {
                promptForSelection: "మీరు ఏ ఉత్పత్తిని తొలగించాలనుకుంటున్నారు? దయచేసి దానిని ఎంచుకోండి.",
                noProducts: "తొలగించడానికి మీ వద్ద ఏ ఉత్పత్తులు లేవు.",
                promptForName: "మీరు ఏ ఉత్పత్తిని తొలగించాలనుకుంటున్నారు? దయచేసి దాని పేరు చెప్పండి.",
                productNotFound: "ఆ పేరుతో నాకు ఏ ఉత్పత్తి కనబడలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.",
                deleted: "సరే, నేను '{productName}'ని తొలగించాను.",
                cancelled: "సరే, నేను తొలగింపును రద్దు చేసాను."
            },
            confirmation: {
                yes: "అవును,సరే",
                no: "కాదు,వద్దు"
            }
        },
        commands: { 
            addProduct: "కొత్త ఉత్పత్తిని జోడించు,ఉత్పత్తిని సృష్టించు,కొత్త వస్తువు",
            deleteProduct: "ఉత్పత్తిని తొలగించు,వస్తువును తొలగించు"
        }
    },
    accountSettings: {
        title: "ఖాతా సెట్టింగ్‌లు",
        backToDashboard: "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు",
        memberSince: "సభ్యుడు",
        totalOrders: "మొత్తం ఆర్డర్‌లు"
    },
    shilpoPlus: {
        title: "శిల్పో+",
        subtitle: "ప్రీమియం ప్రయోజనాలను అన్‌లాక్ చేయండి",
        benefit1: "అర్హత ఉన్న వస్తువులపై వేగవంతమైన డెలివరీ",
        benefit2: "కొత్త చేతిపనులకు మరియు సేకరణలకు ముందస్తు యాక్సెస్",
        benefit3: "ప్రత్యేక సభ్యులకు మాత్రమే ధరలు",
        cta: "శిల్పో+ కు అప్‌గ్రేడ్ చేయండి",
        comingSoon: "త్వరలో వస్తుంది!"
    }
  },
  mr: {
    common: { getStarted: "सुरू करा", edit: "संपादित करा", save: "जतन करा", add: "जोडा", publish: "प्रकाशित करा", cancel: "रद्द करा", close: "बंद करा", delete: "हटवा" },
    nav: { features: "वैशिष्ट्ये", howItWorks: "हे कसे कार्य करते", testimonials: "अभिप्राय" },
    hero: { title: { line1: " हातांनी बनवलेले,", line2: "AI द्वारा समर्थित." }, subtitle: "प्रतिभावान कारागिरांना अद्वितीय, हाताने बनवलेल्या खजिन्यांची कदर करणाऱ्या ग्राहकांशी जोडणारे AI-समर्थित मार्केटप्लेस.", cta: { join: "मार्केटप्लेसमध्ये सामील व्हा", explore: "वैशिष्ट्ये एक्सप्लोर करा" } },
    artisanSignup: { existingMember: "आधीपासून सदस्य आहात?", signInHere: "येथे साइन इन करा" },
    customerSignup: { existingMember: "आधीपासून सदस्य आहात?", signInHere: "येथे साइन इन करा" },
    artisanSignIn: { title: "एक कारागीर म्हणून साइन इन करा", subtitle: "पुन्हा स्वागत आहे! आपल्या डॅशबोर्डवर प्रवेश करा.", back: "होमवर परत जा", labels: { name: "पूर्ण नाव" }, placeholders: { name: "आपले नोंदणीकृत नाव प्रविष्ट करा" }, button: "साइन इन करा", newMember: "प्लॅटफॉर्मवर नवीन आहात?", signUpHere: "येथे साइन अप करा", errors: { name: "कृपया आपले पूर्ण नाव प्रविष्ट करा.", loginFailed: "या नावाने कोणताही कारागीर आढळला नाही." } },
    customerSignIn: { title: "आपल्या खात्यात साइन इन करा", subtitle: "पुन्हा स्वागत आहे! हाताने बनवलेल्या कलाकृतींचे अन्वेषण करा.", back: "होमवर परत जा", labels: { email: "ईमेल पत्ता", password: "पासवर्ड" }, placeholders: { email: "उदा., priya@example.com", password: "आपला पासवर्ड प्रविष्ट करा" }, button: "साइन इन करा", newMember: "प्लॅटफॉर्मवर नवीन आहात?", signUpHere: "येथे साइन अप करा", errors: { email: "कृपया एक वैध ईमेल पत्ता प्रविष्ट करा.", password: "पासवर्ड रिक्त असू शकत नाही.", loginFailed: "अवैध क्रेडेन्शियल्स." } },
    dashboard: {
        greeting: {
            morning: "शुभ सकाळ, {name}!",
            afternoon: "शुभ दुपार, {name}!",
            evening: "शुभ संध्याकाळ, {name}!",
        },
        subtitle: "हे तुमचे सर्जनशील केंद्र आहे. उत्पादने व्यवस्थापित करा, विक्री पहा आणि तुमची कथा जगासोबत शेअर करा.",
        logout: "लॉग आउट",
        addNewProduct: "नवीन उत्पादन जोडा",
        deleteProduct: "उत्पादन हटवा",
        sales: { title: "विक्री एका दृष्टीक्षेपात", totalSales: "एकूण विक्री", orders: "ऑर्डर", productsSold: "विकलेली उत्पादने" },
        story: { title: "माझी कहाणी", placeholder: "तुमची कला, तुमची प्रेरणा आणि तुमच्या वारशाची कहाणी शेअर करा. ग्राहकांशी वैयक्तिक पातळीवर जोडण्याची ही तुमची संधी आहे." },
        products: { title: "माझी उत्पादने", emptyState: "तुम्ही अद्याप कोणतीही उत्पादने जोडलेली नाहीत. चला तुमचे पहिले उत्पादन जोडूया!" },
        addProductModal: {
            title: "एक नवीन उत्पादन जोडा",
            step1: { title: "उत्पादन फोटो अपलोड करा", uploadLabel: "5 पर्यंत फोटो अपलोड करा. पहिला तुमचा मुख्य फोटो आहे.", generate: "प्रतिमांमधून तपशील तयार करा" },
            step2: { title: "तपशील तयार होत आहेत...", message: "आमचे AI तुमच्या उत्पादनासाठी एक सुंदर सूची तयार करत आहे. यास थोडा वेळ लागू शकतो." },
            step3: { title: "पुनरावलोकन करा आणि प्रकाशित करा", subtitle: "तुमचे AI-व्युत्पन्न उत्पादन तपशील तयार आहेत. प्रकाशित करण्यापूर्वी ते संपादित करण्यास मोकळ्या मनाने.", labels: { title: "उत्पादन शीर्षक", description: "उत्पादन वर्णन", story: "त्यामागील कहाणी", price: "सुचवलेली किंमत (INR)", tags: "टॅग / कीवर्ड" }, productAddedSuccess: "उत्पादन यशस्वीरित्या जोडले!" },
            errors: { noImage: "कृपया किमान एक उत्पादन प्रतिमा अपलोड करा.", generationFailed: "AI तपशील तयार करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा." }
        },
        selectionBanner: {
          title: "हटवण्यासाठी उत्पादन निवडा",
          cancel: "रद्द करा"
        }
    },
    customerDashboard: {
        greeting: "स्वागत आहे, {name}!",
        searchPlaceholder: "मातीची भांडी, कापड, कला शोधा...",
        noResults: "'{query}' साठी कोणतीही कलाकृती सापडली नाही",
        emptyState: "बाजारपेठ नुकतीच सुरू झाली आहे! आश्चर्यकारक कलाकृतींसाठी लवकरच परत या.",
        browseAll: "सर्व कलाकृती ब्राउझ करा",
        allProducts: "सर्व उत्पादने",
        addToCart: "कार्टमध्ये जोडा",
        buyNow: "आता खरेदी करा",
        quantity: "प्रमाण",
        viewDetails: "तपशील पहा",
        tabs: {
          browse: "उत्पादने ब्राउझ करा",
          myOrders: "माझ्या ऑर्डर"
        },
        filters: { title: "श्रेण्या", all: "सर्व", pottery: "मातीची भांडी", art: "कला आणि चित्रे", clothing: "कापड आणि वस्त्रे", jewellery: "दागिने" },
        sort: { title: "यानुसार लावा", newest: "नवीनतम", priceAsc: "किंमत: कमी ते जास्त", priceDesc: "किंमत: जास्त ते कमी" },
        accountSettings: "खाते सेटिंग्ज"
    },
    orders: {
      title: "माझ्या ऑर्डर",
      emptyState: "तुम्ही अद्याप कोणतीही ऑर्डर दिलेली नाही.",
      emptyStateSubtext: "तुमचा पुढील हाताने बनवलेला खजिना शोधण्यासाठी ब्राउझिंग सुरू करा!",
      orderId: "ऑर्डर आयडी",
      orderDate: "ऑर्डरची तारीख",
      totalAmount: "एकूण रक्कम",
      status: "स्थिती",
      orderDetails: "ऑर्डर तपशील",
      itemsInOrder: "या ऑर्डरमधील आयटम",
      priceBreakdown: "किंमत तपशील",
      expectedDelivery: "अपेक्षित डिलिव्हरी",
      deliveryTracker: "डिलिव्हरी ट्रॅकर",
      statusTypes: {
        ordered: "ऑर्डर केली",
        packed: "पॅक केले",
        shipped: "पाठवले",
        delivered: "वितरित केले"
      }
    },
    cart: { title: "तुमची शॉपिंग कार्ट", empty: "तुमची कार्ट रिकामी आहे.", total: "एकूण", checkout: "चेकआउटसाठी पुढे जा", remove: "काढा", itemAdded: "आयटम कार्टमध्ये जोडला!", itemRemoved: "आयटम कार्टमधून काढला." },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "सुरक्षित चेकआउट",
        orderSummary: "ऑर्डर सारांश",
        subtotal: "उप-एकूण",
        shipping: "शिपिंग",
        shippingFree: "विनामूल्य",
        total: "एकूण",
        totalPayable: "एकूण देय रक्कम",
        paymentMethod: "पेमेंट पद्धत",
        methods: {
            card: "क्रेडिट/डेबिट कार्ड",
            upi: "UPI",
            netbanking: "नेट बँकिंग"
        },
        cardForm: {
            number: "कार्ड नंबर",
            holder: "कार्डधारकाचे नाव",
            expiry: "समाप्ती (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "पेमेंट करण्यासाठी QR स्कॅन करा",
            or: "किंवा",
            enterId: "UPI आयडी प्रविष्ट करा",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "तुमची बँक निवडा",
            banks: ["स्टेट बँक ऑफ इंडिया", "एचडीएफसी बँक", "आयसीआयसीआय बँक", "अॅक्सिस बँक", "पंजाब नॅशनल बँक"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "सुरक्षितपणे पैसे द्या",
        processing: "पेमेंट प्रक्रिया होत आहे...",
        success: "पेमेंट यशस्वी!",
        successMessage: "तुमची ऑर्डर निश्चित झाली आहे. स्थानिक कारागिरांना पाठिंबा दिल्याबद्दल धन्यवाद!",
        continueShopping: "खरेदी सुरू ठेवा",
        step1: "पडताळणी",
        step2: "शिपिंग",
        step3: "पेमेंट",
        otp: { title: "तुमचा मोबाईल नंबर सत्यापित करा", subtitle: "आम्ही तुमच्या फोनवर वन-टाइम पासवर्ड पाठवू.", phoneLabel: "१०-अंकी मोबाईल नंबर", phonePlaceholder: "तुमचा मोबाईल नंबर टाका", sendButton: "ओटीपी पाठवा", enterOtpTitle: "ओटीपी टाका", enterOtpSubtitle: "{phoneNumber} वर पाठवलेला ६-अंकी कोड टाका", otpLabel: "वन-टाइम पासवर्ड", otpPlaceholder: "६-अंकी ओटीपी टाका", verifyButton: "सत्यापित करा आणि पुढे जा" },
        address: { title: "शिपिंग पत्ता", subtitle: "आम्ही तुमची ऑर्डर कोठे पाठवावी?", fullName: "पूर्ण नाव", addressLine: "पत्ता (घर क्रमांक, इमारत, रस्ता, क्षेत्र)", city: "शहर", state: "राज्य", pincode: "पिन कोड", saveButton: "जतन करा आणि पुढे जा" },
        shippingTo: "शिपिंग पत्ता"
    },
    deleteConfirmation: {
      title: "हटविण्याची पुष्टी करा",
      message: "तुम्ही '{productName}' हटवू इच्छिता याची खात्री आहे का? ही क्रिया पूर्ववत केली जाऊ शकत नाही.",
      confirmButton: "उत्पादन हटवा",
      cancelButton: "रद्द करा"
    },
    deleteProductModal: {
      title: "आवाजाने उत्पादन हटवा",
      prompt: "हटवण्यासाठी उत्पादनाचे नाव सांगा.",
      deleted: "उत्पादन हटवले.",
      cancelled: "हटवणे रद्द केले."
    },
    voiceAssistant: {
        ui: { tooltip: "व्हॉइस असिस्टंट सक्रिय करा", listening: "ऐकत आहे...", processing: "प्रक्रिया करत आहे...", talkToAI: "AI शी बोला" },
        responses: { 
            greeting: "नमस्कार! मी आज तुमची कशी मदत करू शकेन?",
            commandNotFound: "क्षमस्व, मला समजले नाही. कृपया पुन्हा प्रयत्न करा.",
            addProduct: { 
                promptForImage: "नक्कीच. कृपया तुमच्या नवीन उत्पादनाचे एक ते पाच फोटो अपलोड करा. मी तुमच्यासाठी प्रतिमांमधून आपोआप तपशील तयार करेन.", 
                generating: "धन्यवाद. मी आता AI सह उत्पादन तपशील तयार करत आहे. यास थोडा वेळ लागू शकतो.",
                promptForReview: "मी उत्पादन तपशील तयार केले आहेत. कृपया तुमच्या स्क्रीनवर त्यांचे पुनरावलोकन करा. गरज भासल्यास तुम्ही बदल करू शकता. तुम्ही तयार झाल्यावर, प्रकाशित करा बटण दाबा."
            },
            deleteProduct: {
                promptForSelection: "तुम्ही कोणते उत्पादन हटवू इच्छिता? कृपया ते निवडा.",
                noProducts: "तुमच्याकडे हटवण्यासाठी कोणतीही उत्पादने नाहीत.",
                promptForName: "तुम्ही कोणते उत्पादन हटवू इच्छिता? कृपया त्याचे नाव सांगा.",
                productNotFound: "मला त्या नावाचे कोणतेही उत्पादन सापडले नाही. कृपया पुन्हा प्रयत्न करा.",
                deleted: "ठीक आहे, मी '{productName}' हटवले आहे.",
                cancelled: "ठीक आहे, मी हटवणे रद्द केले आहे."
            },
            confirmation: {
                yes: "हो,होय",
                no: "नाही"
            }
        },
        commands: { 
            addProduct: "नवीन उत्पादन जोडा,उत्पादन तयार करा,नवीन आयटम",
            deleteProduct: "उत्पादन हटवा,आयटम काढा"
        }
    },
    accountSettings: {
        title: "खाते सेटिंग्ज",
        backToDashboard: "डॅशबोर्डवर परत जा",
        memberSince: "सदस्य",
        totalOrders: "एकूण ऑर्डर"
    },
    shilpoPlus: {
        title: "शिल्पो+",
        subtitle: "प्रीमियम फायदे अनलॉक करा",
        benefit1: "पात्र वस्तूंवर जलद वितरण",
        benefit2: "नवीन कलाकुसर आणि संग्रहांमध्ये लवकर प्रवेश",
        benefit3: "केवळ सदस्यांसाठी विशेष किमती",
        cta: "शिल्पो+ वर श्रेणीसुधारित करा",
        comingSoon: "लवकरच येत आहे!"
    }
  },
  pa: {
    common: { getStarted: "ਸ਼ੁਰੂ ਕਰੋ", edit: "ਸੋਧੋ", save: "ਸੁਰੱਖਿਅਤ ਕਰੋ", add: "ਜੋੜੋ", publish: "ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ", cancel: "ਰੱਦ ਕਰੋ", close: "ਬੰਦ ਕਰੋ", delete: "ਮਿਟਾਓ" },
    nav: { features: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", howItWorks: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ", testimonials: "ਪ੍ਰਸੰਸਾ ਪੱਤਰ" },
    hero: { title: { line1: "ਹੱਥਾਂ ਦੁਆਰਾ ਬਣਾਇਆ,", line2: "AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ।" }, subtitle: "ਪ੍ਰਤਿਭਾਸ਼ਾਲੀ ਕਾਰੀਗਰਾਂ ਨੂੰ ਉਹਨਾਂ ਗਾਹਕਾਂ ਨਾਲ ਜੋੜਨ ਵਾਲਾ AI-ਸੰਚਾਲਿਤ ਮਾਰਕੀਟਪਲੇਸ ਜੋ ਵਿਲੱਖਣ, ਹੱਥ ਨਾਲ ਬਣੇ ਖਜ਼ਾਨਿਆਂ ਦੀ ਕਦਰ ਕਰਦੇ ਹਨ।", cta: { join: "ਮਾਰਕੀਟਪਲੇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ", explore: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ" } },
    artisanSignup: { existingMember: "ਪਹਿਲਾਂ ਹੀ ਮੈਂਬਰ ਹੋ?", signInHere: "ਇੱਥੇ ਸਾਈਨ ਇਨ ਕਰੋ" },
    customerSignup: { existingMember: "ਪਹਿਲਾਂ ਹੀ ਮੈਂਬਰ ਹੋ?", signInHere: "ਇੱਥੇ ਸਾਈਨ ਇਨ ਕਰੋ" },
    artisanSignIn: { title: "ਇੱਕ ਕਾਰੀਗਰ ਵਜੋਂ ਸਾਈਨ ਇਨ ਕਰੋ", subtitle: "ਵਾਪਸ ਆਉਣ 'ਤੇ ਸੁਆਗਤ ਹੈ! ਆਪਣੇ ਡੈਸ਼ਬੋਰਡ ਤੱਕ ਪਹੁੰਚ ਕਰੋ।", back: "ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਵਾਪਸ ਜਾਓ", labels: { name: "ਪੂਰਾ ਨਾਂ" }, placeholders: { name: "ਆਪਣਾ ਰਜਿਸਟਰਡ ਨਾਮ ਦਰਜ ਕਰੋ" }, button: "ਸਾਈਨ ਇਨ ਕਰੋ", newMember: "ਪਲੇਟਫਾਰਮ 'ਤੇ ਨਵੇਂ ਹੋ?", signUpHere: "ਇੱਥੇ ਸਾਈਨ ਅੱਪ ਕਰੋ", errors: { name: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ।", loginFailed: "ਇਸ ਨਾਮ ਨਾਲ ਕੋਈ ਕਾਰੀਗਰ ਨਹੀਂ ਮਿਲਿਆ।" } },
    customerSignIn: { title: "ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ", subtitle: "ਵਾਪਸ ਆਉਣ 'ਤੇ ਸੁਆਗਤ ਹੈ! ਹੱਥ ਨਾਲ ਬਣਾਈਆਂ ਕਲਾਕ੍ਰਿਤੀਆਂ ਦੀ ਪੜਚੋਲ ਕਰੋ।", back: "ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਵਾਪਸ ਜਾਓ", labels: { email: "ਈਮੇਲ ਪਤਾ", password: "ਪਾਸਵਰਡ" }, placeholders: { email: "ਜਿਵੇਂ ਕਿ, priya@example.com", password: "ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ" }, button: "ਸਾਈਨ ਇਨ ਕਰੋ", newMember: "ਪਲੇਟਫਾਰਮ 'ਤੇ ਨਵੇਂ ਹੋ?", signUpHere: "ਇੱਥੇ ਸਾਈਨ ਅੱਪ ਕਰੋ", errors: { email: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਈਮੇਲ ਪਤਾ ਦਰਜ ਕਰੋ।", password: "ਪਾਸਵਰਡ ਖਾਲੀ ਨਹੀਂ ਹੋ ਸਕਦਾ।", loginFailed: "ਅਵੈਧ ਪ੍ਰਮਾਣ ਪੱਤਰ।" } },
    dashboard: {
        greeting: {
            morning: "ਸ਼ੁਭ ਸਵੇਰ, {name}!",
            afternoon: "ਸ਼ੁਭ ਦੁਪਹਿਰ, {name}!",
            evening: "ਸ਼ੁਭ ਸ਼ਾਮ, {name}!",
        },
        subtitle: "ਇਹ ਤੁਹਾਡਾ ਰਚਨਾਤਮਕ ਕੇਂਦਰ ਹੈ। ਉਤਪਾਦਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ, ਵਿਕਰੀ ਵੇਖੋ, ਅਤੇ ਆਪਣੀ ਕਹਾਣੀ ਦੁਨੀਆ ਨਾਲ ਸਾਂਝੀ ਕਰੋ।",
        logout: "ਲੌਗ ਆਉਟ",
        addNewProduct: "ਨਵਾਂ ਉਤਪਾਦ ਸ਼ਾਮਲ ਕਰੋ",
        deleteProduct: "ਉਤਪਾਦ ਮਿਟਾਓ",
        sales: { title: "ਇੱਕ ਨਜ਼ਰ 'ਤੇ ਵਿਕਰੀ", totalSales: "ਕੁੱਲ ਵਿਕਰੀ", orders: "ਆਰਡਰ", productsSold: "ਵੇਚੇ ਗਏ ਉਤਪਾਦ" },
        story: { title: "ਮੇਰੀ ਕਹਾਣੀ", placeholder: "ਆਪਣੀ ਕਲਾ, ਆਪਣੀ ਪ੍ਰੇਰਣਾ, ਅਤੇ ਆਪਣੀ ਵਿਰਾਸਤ ਦੀ ਕਹਾਣੀ ਸਾਂਝੀ ਕਰੋ। ਇਹ ਗਾਹਕਾਂ ਨਾਲ ਨਿੱਜੀ ਪੱਧਰ 'ਤੇ ਜੁੜਨ ਦਾ ਤੁਹਾਡਾ ਮੌਕਾ ਹੈ।" },
        products: { title: "ਮੇਰੇ ਉਤਪਾਦ", emptyState: "ਤੁਸੀਂ ਅਜੇ ਤੱਕ ਕੋਈ ਉਤਪਾਦ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤਾ ਹੈ। ਆਓ ਆਪਣਾ ਪਹਿਲਾ ਉਤਪਾਦ ਸ਼ਾਮਲ ਕਰੀਏ!" },
        addProductModal: {
            title: "ਇੱਕ ਨਵਾਂ ਉਤਪਾਦ ਸ਼ਾਮਲ ਕਰੋ",
            step1: { title: "ਉਤਪਾਦ ਦੀਆਂ ਫੋਟੋਆਂ ਅਪਲੋਡ ਕਰੋ", uploadLabel: "5 ਤੱਕ ਫੋਟੋਆਂ ਅਪਲੋਡ ਕਰੋ। ਪਹਿਲੀ ਤੁਹਾਡੀ ਮੁੱਖ ਤਸਵੀਰ ਹੈ।", generate: "ਚਿੱਤਰਾਂ ਤੋਂ ਵੇਰਵੇ ਤਿਆਰ ਕਰੋ" },
            step2: { title: "ਵੇਰਵੇ ਤਿਆਰ ਕੀਤੇ ਜਾ ਰਹੇ ਹਨ...", message: "ਸਾਡਾ AI ਤੁਹਾਡੇ ਉਤਪਾਦ ਲਈ ਇੱਕ ਸੁੰਦਰ ਸੂਚੀ ਤਿਆਰ ਕਰ ਰਿਹਾ ਹੈ। ਇਸ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ।" },
            step3: { title: "ਸਮੀਖਿਆ ਕਰੋ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ", subtitle: "ਤੁਹਾਡੇ AI-ਤਿਆਰ ਕੀਤੇ ਉਤਪਾਦ ਵੇਰਵੇ ਤਿਆਰ ਹਨ। ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਹਨਾਂ ਨੂੰ ਸੰਪਾਦਿਤ ਕਰਨ ਲਈ ਸੁਤੰਤਰ ਮਹਿਸੂਸ ਕਰੋ।", labels: { title: "ਉਤਪਾਦ ਦਾ ਸਿਰਲੇਖ", description: "ਉਤਪਾਦ ਦਾ ਵੇਰਵਾ", story: "ਇਸਦੇ ਪਿੱਛੇ ਦੀ ਕਹਾਣੀ", price: "ਸੁਝਾਈ ਗਈ ਕੀਮਤ (INR)", tags: "ਟੈਗ / ਕੀਵਰਡਸ" }, productAddedSuccess: "ਉਤਪਾਦ ਸਫਲਤਾਪੂਰਵਕ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ!" },
            errors: { noImage: "ਕਿਰਪਾ ਕਰਕੇ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਉਤਪਾਦ ਚਿੱਤਰ ਅੱਪਲੋਡ ਕਰੋ।", generationFailed: "AI ਵੇਰਵੇ ਤਿਆਰ ਕਰਨ ਵਿੱਚ ਅਸਫਲ ਰਿਹਾ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।" }
        },
        selectionBanner: {
          title: "ਮਿਟਾਉਣ ਲਈ ਇੱਕ ਉਤਪਾਦ ਚੁਣੋ",
          cancel: "ਰੱਦ ਕਰੋ"
        }
    },
    customerDashboard: {
        greeting: "ਜੀ ਆਇਆਂ ਨੂੰ, {name}!",
        searchPlaceholder: "ਮਿੱਟੀ ਦੇ ਬਰਤਨ, ਕੱਪੜੇ, ਕਲਾ ਦੀ ਖੋਜ ਕਰੋ...",
        noResults: "'{query}' ਲਈ ਕੋਈ ਸ਼ਿਲਪਕਾਰੀ ਨਹੀਂ ਮਿਲੀ",
        emptyState: "ਮਾਰਕਿਟਪਲੇਸ ਹੁਣੇ ਸ਼ੁਰੂ ਹੋ ਰਿਹਾ ਹੈ! ਸ਼ਾਨਦਾਰ ਸ਼ਿਲਪਕਾਰੀ ਲਈ ਜਲਦੀ ਹੀ ਵਾਪਸ ਆਓ।",
        browseAll: "ਸਾਰੀਆਂ ਸ਼ਿਲਪਕਾਰੀ ਵੇਖੋ",
        allProducts: "ਸਾਰੇ ਉਤਪਾਦ",
        addToCart: "ਕਾਰਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ",
        buyNow: "ਹੁਣੇ ਖਰੀਦੋ",
        quantity: "ਮਾਤਰਾ",
        viewDetails: "ਵੇਰਵੇ ਵੇਖੋ",
        tabs: {
          browse: "ਉਤਪਾਦ ਵੇਖੋ",
          myOrders: "ਮੇਰੇ ਆਰਡਰ"
        },
        filters: { title: "ਸ਼੍ਰੇਣੀਆਂ", all: "ਸਾਰੇ", pottery: "ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ", art: "ਕਲਾ ਅਤੇ ਪੇਂਟਿੰਗਜ਼", clothing: "ਕੱਪੜੇ ਅਤੇ ਟੈਕਸਟਾਈਲ", jewellery: "ਗਹਿਣੇ" },
        sort: { title: "ਇਸ ਅਨੁਸਾਰ ਕ੍ਰਮਬੱਧ ਕਰੋ", newest: "ਨਵੀਨਤਮ", priceAsc: "ਕੀਮਤ: ਘੱਟ ਤੋਂ ਵੱਧ", priceDesc: "ਕੀਮਤ: ਵੱਧ ਤੋਂ ਘੱਟ" },
        accountSettings: "ਖਾता ਸੈਟਿੰਗਾਂ"
    },
    orders: {
      title: "ਮੇਰੇ ਆਰਡਰ",
      emptyState: "ਤੁਸੀਂ ਅਜੇ ਤੱਕ ਕੋਈ ਆਰਡਰ ਨਹੀਂ ਦਿੱਤਾ ਹੈ।",
      emptyStateSubtext: "ਆਪਣਾ ਅਗਲਾ ਹੱਥ ਨਾਲ ਬਣਿਆ ਖਜ਼ਾਨਾ ਲੱਭਣ ਲਈ ਬ੍ਰਾਊਜ਼ਿੰਗ ਸ਼ੁਰੂ ਕਰੋ!",
      orderId: "ਆਰਡਰ ਆਈਡੀ",
      orderDate: "ਆਰਡਰ ਦੀ ਮਿਤੀ",
      totalAmount: "ਕੁੱਲ ਰਕਮ",
      status: "ਸਥਿਤੀ",
      orderDetails: "ਆਰਡਰ ਵੇਰਵੇ",
      itemsInOrder: "ਇਸ ਆਰਡਰ ਵਿੱਚ ਆਈਟਮਾਂ",
      priceBreakdown: "ਕੀਮਤ ਦਾ ਵੇਰਵਾ",
      expectedDelivery: "ਸੰਭਾਵਿਤ ਡਿਲੀਵਰੀ",
      deliveryTracker: "ਡਿਲਿਵਰੀ ਟਰੈਕਰ",
      statusTypes: {
        ordered: "ਆਰਡਰ ਕੀਤਾ ਗਿਆ",
        packed: "ਪੈਕ ਕੀਤਾ ਗਿਆ",
        shipped: "ਭੇਜਿਆ ਗਿਆ",
        delivered: "ਡਿਲੀਵਰ ਕੀਤਾ ਗਿਆ"
      }
    },
    cart: { title: "ਤੁਹਾਡਾ ਸ਼ਾਪਿੰਗ ਕਾਰਟ", empty: "ਤੁਹਾਡਾ ਕਾਰਟ ਖਾਲੀ ਹੈ।", total: "ਕੁੱਲ", checkout: "ਚੈੱਕਆਉਟ ਲਈ ਅੱਗੇ ਵਧੋ", remove: "ਹਟਾਓ", itemAdded: "ਆਈਟਮ ਕਾਰਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੀ ਗਈ!", itemRemoved: "ਆਈਟਮ ਕਾਰਟ ਤੋਂ ਹਟਾ ਦਿੱਤੀ ਗਈ।" },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "ਸੁਰੱਖਿਅਤ ਚੈੱਕਆਉਟ",
        orderSummary: "ਆਰਡਰ ਸੰਖੇਪ",
        subtotal: "ਉਪ-ਜੋੜ",
        shipping: "ਸ਼ਿਪਿੰਗ",
        shippingFree: "ਮੁਫ਼ਤ",
        total: "ਕੁੱਲ",
        totalPayable: "ਕੁੱਲ ਭੁਗਤਾਨਯੋਗ",
        paymentMethod: "ਭੁਗਤਾਨ ਵਿਧੀ",
        methods: {
            card: "ਕ੍ਰੈਡਿਟ/ਡੈਬਿਟ ਕਾਰਡ",
            upi: "UPI",
            netbanking: "ਨੈੱਟ ਬੈਂਕਿੰਗ"
        },
        cardForm: {
            number: "ਕਾਰਡ ਨੰਬਰ",
            holder: "ਕਾਰਡਧਾਰਕ ਦਾ ਨਾਮ",
            expiry: "ਮਿਆਦ (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "ਭੁਗਤਾਨ ਕਰਨ ਲਈ QR ਸਕੈਨ ਕਰੋ",
            or: "ਜਾਂ",
            enterId: "UPI ID ਦਾਖਲ ਕਰੋ",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "ਆਪਣਾ ਬੈਂਕ ਚੁਣੋ",
            banks: ["ਸਟੇਟ ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ", "HDFC ਬੈਂਕ", "ICICI ਬੈਂਕ", "ਐਕਸਿਸ ਬੈਂਕ", "ਪੰਜਾਬ ਨੈਸ਼ਨਲ ਬੈਂਕ"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ",
        processing: "ਭੁਗਤਾਨ ਦੀ ਪ੍ਰਕਿਰਿਆ ਹੋ ਰਹੀ ਹੈ...",
        success: "ਭੁਗਤਾਨ ਸਫਲ!",
        successMessage: "ਤੁਹਾਡਾ ਆਰਡਰ ਪੱਕਾ ਹੋ ਗਿਆ ਹੈ। ਸਥਾਨਕ ਕਾਰੀਗਰਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨ ਲਈ ਤੁਹਾਡਾ ਧੰਨਵਾਦ!",
        continueShopping: "ਖਰੀਦਦਾਰੀ ਜਾਰੀ ਰੱਖੋ",
        step1: "ਤਸਦੀਕ",
        step2: "ਸ਼ਿਪਿੰਗ",
        step3: "ਭੁਗਤਾਨ",
        otp: { title: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਤਸਦੀਕ ਕਰੋ", subtitle: "ਅਸੀਂ ਤੁਹਾਡੇ ਫ਼ੋਨ 'ਤੇ ਇੱਕ ਵਨ-ਟਾਈਮ ਪਾਸਵਰਡ ਭੇਜਾਂਗੇ।", phoneLabel: "10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ", phonePlaceholder: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ", sendButton: "OTP ਭੇਜੋ", enterOtpTitle: "OTP ਦਾਖਲ ਕਰੋ", enterOtpSubtitle: "{phoneNumber} 'ਤੇ ਭੇਜੇ ਗਏ 6-ਅੰਕਾਂ ਦਾ ਕੋਡ ਦਾਖਲ ਕਰੋ", otpLabel: "ਵਨ-ਟਾਈਮ ਪਾਸਵਰਡ", otpPlaceholder: "6-ਅੰਕਾਂ ਦਾ OTP ਦਾਖਲ ਕਰੋ", verifyButton: "ਤਸਦੀਕ ਕਰੋ ਅਤੇ ਅੱਗੇ ਵਧੋ" },
        address: { title: "ਸ਼ਿਪਿੰਗ ਪਤਾ", subtitle: "ਸਾਨੂੰ ਤੁਹਾਡਾ ਆਰਡਰ ਕਿੱਥੇ ਭੇਜਣਾ ਚਾਹੀਦਾ ਹੈ?", fullName: "ਪੂਰਾ ਨਾਂਮ", addressLine: "ਪਤਾ (ਘਰ ਨੰਬਰ, ਇਮਾਰਤ, ਗਲੀ, ਖੇਤਰ)", city: "ਸ਼ਹਿਰ", state: "ਰਾਜ", pincode: "ਪਿੰਨ ਕੋਡ", saveButton: "ਸੁਰੱਖਿਅਤ ਕਰੋ ਅਤੇ ਜਾਰੀ ਰੱਖੋ" },
        shippingTo: "ਸ਼ਿਪਿੰਗ ਪਤਾ"
    },
    deleteConfirmation: {
      title: "ਮਿਟਾਉਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
      message: "ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ 'ਤੇ '{productName}' ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਹ ਕਾਰਵਾਈ ਵਾਪਸ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ।",
      confirmButton: "ਉਤਪਾਦ ਮਿਟਾਓ",
      cancelButton: "ਰੱਦ ਕਰੋ"
    },
    deleteProductModal: {
      title: "ਆਵਾਜ਼ ਦੁਆਰਾ ਉਤਪਾਦ ਮਿਟਾਓ",
      prompt: "ਮਿਟਾਉਣ ਲਈ ਉਤਪਾਦ ਦਾ ਨਾਮ ਬੋਲੋ।",
      deleted: "ਉਤਪਾਦ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ ਹੈ।",
      cancelled: "ਮਿਟਾਉਣਾ ਰੱਦ ਕਰ ਦਿੱਤਾ ਗਿਆ ਹੈ।"
    },
    voiceAssistant: {
        ui: { tooltip: "ਵੌਇਸ ਸਹਾਇਕ ਨੂੰ ਸਰਗਰਮ ਕਰੋ", listening: "ਸੁਣ ਰਿਹਾ ਹੈ...", processing: "ਪ੍ਰੋਸੈਸਿੰਗ...", talkToAI: "AI ਨਾਲ ਗੱਲ ਕਰੋ" },
        responses: { 
            greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
            commandNotFound: "ਮਾਫ ਕਰਨਾ, ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਇਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
            addProduct: { 
                promptForImage: "ਜ਼ਰੂਰ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਨਵੇਂ ਉਤਪਾਦ ਦੀਆਂ ਇੱਕ ਤੋਂ ਪੰਜ ਫੋਟੋਆਂ ਅੱਪਲੋਡ ਕਰੋ। ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਚਿੱਤਰਾਂ ਤੋਂ ਆਪਣੇ ਆਪ ਵੇਰਵੇ ਤਿਆਰ ਕਰਾਂਗਾ।", 
                generating: "ਧੰਨਵਾਦ। ਮੈਂ ਹੁਣ AI ਨਾਲ ਉਤਪਾਦ ਵੇਰਵੇ ਤਿਆਰ ਕਰ ਰਿਹਾ ਹਾਂ। ਇਸ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ।",
                promptForReview: "ਮੈਂ ਉਤਪਾਦ ਵੇਰਵੇ ਬਣਾ ਲਏ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਸਕ੍ਰੀਨ 'ਤੇ ਉਹਨਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ। ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ ਤੁਸੀਂ ਬਦਲਾਅ ਕਰ ਸਕਦੇ ਹੋ। ਜਦੋਂ ਤੁਸੀਂ ਤਿਆਰ ਹੋਵੋ, ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ ਬਟਨ ਦਬਾਓ।"
            },
            deleteProduct: {
                promptForSelection: "ਤੁਸੀਂ ਕਿਹੜਾ ਉਤਪਾਦ ਮਿਟਾਉਣਾ ਚਾਹੋਗੇ? ਕਿਰਪਾ ਕਰਕੇ ਇਸਨੂੰ ਚੁਣੋ।",
                noProducts: "ਤੁਹਾਡੇ ਕੋਲ ਮਿਟਾਉਣ ਲਈ ਕੋਈ ਉਤਪਾਦ ਨਹੀਂ ਹਨ।",
                promptForName: "ਤੁਸੀਂ ਕਿਹੜਾ ਉਤਪਾਦ ਮਿਟਾਉਣਾ ਚਾਹੋਗੇ? ਕਿਰਪਾ ਕਰਕੇ ਉਸਦਾ ਨਾਮ ਬੋਲੋ।",
                productNotFound: "ਮੈਨੂੰ ਉਸ ਨਾਮ ਦਾ ਕੋਈ ਉਤਪਾਦ ਨਹੀਂ ਮਿਲਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
                deleted: "ਠੀਕ ਹੈ, ਮੈਂ '{productName}' ਨੂੰ ਮਿਟਾ ਦਿੱਤਾ ਹੈ।",
                cancelled: "ਠੀਕ ਹੈ, ਮੈਂ ਮਿਟਾਉਣਾ ਰੱਦ ਕਰ ਦਿੱਤਾ ਹੈ।"
            },
            confirmation: {
                yes: "ਹਾਂ,ਠੀਕ ਹੈ",
                no: "ਨਹੀਂ,ਨਾ"
            }
        },
        commands: { 
            addProduct: "ਨਵਾਂ ਉਤਪਾਦ ਸ਼ਾਮਲ ਕਰੋ,ਉਤਪਾਦ ਬਣਾਓ,ਨਵੀਂ ਆਈਟਮ",
            deleteProduct: "ਉਤਪਾਦ ਮਿਟਾਓ,ਆਈਟਮ ਹਟਾਓ"
        }
    },
    accountSettings: {
        title: "ਖਾता ਸੈਟਿੰਗਾਂ",
        backToDashboard: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ",
        memberSince: "ਮੈਂਬਰ",
        totalOrders: "ਕੁੱਲ ਆਰਡਰ"
    },
    shilpoPlus: {
        title: "ਸ਼ਿਲਪੋ+",
        subtitle: "ਪ੍ਰੀਮੀਅਮ ਲਾਭਾਂ ਨੂੰ ਅਨਲੌਕ ਕਰੋ",
        benefit1: "ਯੋਗ ਆਈਟਮਾਂ 'ਤੇ ਤੇਜ਼ ਡਿਲੀਵਰੀ",
        benefit2: "ਨਵੇਂ ਸ਼ਿਲਪਕਾਰੀ ਅਤੇ ਸੰਗ੍ਰਹਿ ਤੱਕ ਛੇਤੀ ਪਹੁੰਚ",
        benefit3: "ਵਿਸ਼ੇਸ਼ ਮੈਂਬਰ-ਸਿਰਫ ਕੀਮਤਾਂ",
        cta: "ਸ਼ਿਲਪੋ+ 'ਤੇ ਅੱਪਗ੍ਰੇਡ ਕਰੋ",
        comingSoon: "ਆ रहा ਹੈ!"
    }
  },
  gu: {
    common: { getStarted: "શરૂ કરો", edit: "સંપાદિત કરો", save: "સાચવો", add: "ઉમેરો", publish: "પ્રકાશિત કરો", cancel: "રદ કરો", close: "બંધ કરો", delete: "કાઢી નાખો" },
    nav: { features: "સુવિધાઓ", howItWorks: "તે કેવી રીતે કાર્ય કરે છે", testimonials: "પ્રશંસાપત્રો" },
    hero: { title: { line1: "હાથથી બનાવેલ,", line2: "AI દ્વારા સંચાલિત." }, subtitle: "પ્રતિભાશਾਲી કારીગરોને અનન्य, હાથથી બનાવેલા ખજાનાને પસંદ કરતા ગ્રાહકો સાથે જોડતું AI-સંચાલિત બજાર.", cta: { join: "બજારમાં જોડાઓ", explore: "સુવિધાઓનું અન્વેષણ કરો" } },
    artisanSignup: { existingMember: "પહેલાથી જ સભ્ય છો?", signInHere: "અહીં સાઇન ઇન કરો" },
    customerSignup: { existingMember: "પહેલાથી જ સભ્ય છો?", signInHere: "અહીં સાઇન ઇન કરો" },
    artisanSignIn: { title: "કારીગર તરીકે સાઇન ઇન કરો", subtitle: "ફરી સ્વાગત છે! તમારા ડેશબોર્ડને ઍક્સેસ કરો.", back: "હોમ પર પાછા જાઓ", labels: { name: "પૂરું નામ" }, placeholders: { name: "તમારું નોંધાયેલ નામ દાખલ કરો" }, button: "સાઇન ઇન કરો", newMember: "પ્લેટફોર્મ પર નવા છો?", signUpHere: "અહીં સાઇન અપ કરો", errors: { name: "કૃપા કરીને તમારું પૂરું નામ દાખલ કરો.", loginFailed: "આ નામ સાથે કોઈ કારીગર મળ્યો નથી." } },
    customerSignIn: { title: "તમારા એકાઉન્ટમાં સાઇન ઇન કરો", subtitle: "ફરી સ્વાગત છે! હાથથી બનાવેલી હસ્તકલાનું અન્વેષણ કરો.", back: "હોમ પર પાછા જાઓ", labels: { email: "ઇમેઇલ સરનામું", password: "પાસવર્ડ" }, placeholders: { email: "દા.ત., priya@example.com", password: "તમારો પાસવર્ડ દાખલ કરો" }, button: "સાઇન ઇન કરો", newMember: "પ્લેટફોર્મ પર નવા છો?", signUpHere: "અહીં સાઇન અપ કરો", errors: { email: "કૃપા કરીને માન્ય ઇમેઇલ સરનામું દાખલ કરો.", password: "પાસવર્ડ ખાલી ન હોઈ શકે.", loginFailed: "અમાન્ય ઓળખપત્રો." } },
    dashboard: {
        greeting: {
            morning: "સુપ્રભાત, {name}!",
            afternoon: "શુભ બપોર, {name}!",
            evening: "શુભ સાંજ, {name}!",
        },
        subtitle: "આ તમારું સર્જનાત્મક કેન્દ્ર છે. ઉત્પાદનોનું સંચાલન કરો, વેચાણ જુઓ અને તમારી વાર્તા વિશ્વ સાથે શેર કરો.",
        logout: "લૉગ આઉਟ",
        addNewProduct: "નવું ઉત્પાદન ઉમેરો",
        deleteProduct: "ઉત્પાદન કાઢી નાખો",
        sales: { title: "એક નજરમાં વેચાણ", totalSales: "કુલ વેચાણ", orders: "ઓર્ડર્સ", productsSold: "વેચાયેલા ઉત્પાદનો" },
        story: { title: "મારી વાર્તા", placeholder: "તમારી કલા, તમારી પ્રેરણા અને તમારા વારસાની વાર્તા શેર કરો. ਗ્રાહકો સાથે વ્યક્તિગત સ્તરે જોડાવાની આ તમારી તક છે." },
        products: { title: "મારા ઉત્પાદનો", emptyState: "તમે હજી સુધી કોઈ ઉત્પાદનો ઉમેર્યા નથી. ચાલો તમારું પ્રથમ ઉત્પાદન ઉમેરીએ!" },
        addProductModal: {
            title: "એક નવું ઉત્પાદન ઉમેરો",
            step1: { title: "ઉત્પાદન ફોટા અપલોડ કરો", uploadLabel: "5 સુધી ફોટા અપલોડ કરો. પ્રથમ તમારો મુખ્ય ફોટો છે.", generate: "છબીઓમાંથી વિગતો બનાવો" },
            step2: { title: "વિગતો બની રહી છે...", message: "અમારું AI તમારા ઉત્પાદન માટે એક સુંદર સૂચિ બનાવી રહ્યું છે. આમાં થોડો સમય લાગી શકે છે." },
            step3: { title: "સમીક્ષા કરો અને પ્રકાશિત કરો", subtitle: "તમારી AI-જનરેટ કરેલી ઉત્પાદન વિગતો તૈયાર છે. પ્રકાશિત કરતા પહેલા તેને સંપાદિત કરવા માટે નિઃસંકોચ.", labels: { title: "ઉત્પાદન શીર્ષક", description: "ઉત્પાદન વર્ણન", story: "તેની પાછળની વાર્તા", price: "સૂચવેલ કિંમત (INR)", tags: "ટૅગ્સ / કીવર્ડ્સ" }, productAddedSuccess: "ઉત્પાદન સફળતાપૂર્વક ઉમેરાયું!" },
            errors: { noImage: "કૃપા કરીને ઓછામાં ઓછી એક ઉત્પાદન છબી અપલોડ કરો.", generationFailed: "AI વિગતો બનાવવામાં નિષ્ફળ ગયું. કૃપા કરીને ફરી પ્રયાસ કરો." }
        },
        selectionBanner: {
          title: "કાઢી નાખવા માટે ઉત્પાદન પસંદ કરો",
          cancel: "રદ કરો"
        }
    },
    customerDashboard: {
        greeting: "આપનું સ્વાગત છે, {name}!",
        searchPlaceholder: "માટીકામ, કાપડ, કલા શોધો...",
        noResults: "'{query}' માટે કોઈ હસ્તકલા મળી નથી",
        emptyState: "બજાર હમણાં જ શરૂ થઈ રહ્યું છે! આકર્ષક હસ્તકલા માટે ટૂંક સમયમાં પાછા તપાસો.",
        browseAll: "બધી હસ્તકલા બ્રાઉઝ કરો",
        allProducts: "બધા ઉત્પાદનો",
        addToCart: "કાર્ટમાં ઉમેરો",
        buyNow: "હમણાં ખરીદો",
        quantity: "જથ્થો",
        viewDetails: "વિગતો જુઓ",
        tabs: {
          browse: "ઉત્પાદનો બ્રાઉઝ કરો",
          myOrders: "મારા ઓર્ડર્સ"
        },
        filters: { title: "શ્રેણીઓ", all: "બધી", pottery: "માટીકામ", art: "કલા અને ચિત્રો", clothing: "કાપડ અને વસ્ત્રો", jewellery: "ઘરેણાં" },
        sort: { title: "આ પ્રમાણે ગોઠવો", newest: "નવીનતમ", priceAsc: "કિંમત: ઓછી થી વધુ", priceDesc: "કિંમત: વધુ થી ઓછી" },
        accountSettings: "એકાઉન્ટ સેટિંગ્સ"
    },
    orders: {
      title: "મારા ઓર્ડર્સ",
      emptyState: "તમે હજી સુધી કોઈ ઓર્ડર આપ્યો નથી.",
      emptyStateSubtext: "તમારો આગલો હાથથી બનાવેલો ખજાનો શોધવા માટે બ્રાઉઝિંગ શરૂ કરો!",
      orderId: "ઓર્ડર આઈડી",
      orderDate: "ઓર્ડરની તારીખ",
      totalAmount: "કુલ રકમ",
      status: "સ્થિતિ",
      orderDetails: "ઓર્ડર વિગતો",
      itemsInOrder: "આ ઓર્ડરમાંની આઇટમ્સ",
      priceBreakdown: "કિંમતનું વિરામ",
      expectedDelivery: "અપેક્ષિત ડિલિવરી",
      deliveryTracker: "ડિલિવરી ટ્રેકર",
      statusTypes: {
        ordered: "ઓર્ડર કર્યો",
        packed: "પેક કર્યું",
        shipped: "મોકલ્યો",
        delivered: "પહોંચાડ્યો"
      }
    },
    cart: { title: "તમારી શોપિંગ કાર્ટ", empty: "તમારી કાર્ટ ખાલી છે.", total: "કુલ", checkout: "ચેકઆઉટ કરવા આગળ વધો", remove: "દૂર કરો", itemAdded: "આઇટમ કાર્ટમાં ઉમેરાઈ!", itemRemoved: "આઇટમ કાર્ટમાંથી દૂર કરાઈ." },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "સુરક્ષિત ચેકઆઉટ",
        orderSummary: "ઓર્ડર સારાંશ",
        subtotal: "પેટા-ટોટલ",
        shipping: "શિપિંગ",
        shippingFree: "મફત",
        total: "કુલ",
        totalPayable: "કુલ ચૂકવવાપાત્ર",
        paymentMethod: "ચુકવણી પદ્ધતિ",
        methods: {
            card: "ક્રેડિટ/ડેબિટ કાર્ડ",
            upi: "UPI",
            netbanking: "નેટ બેંકિંગ"
        },
        cardForm: {
            number: "કાર્ડ નંબર",
            holder: "કાર્ડધારકનું નામ",
            expiry: "સમાપ્તિ (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "ચુકવણી કરવા માટે QR સ્કેન કરો",
            or: "અથવા",
            enterId: "UPI ID દાખલ કરો",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "તમારી બેંક પસંદ કરો",
            banks: ["સ્ટેટ બેંક ઓફ ઈન્ડિયા", "HDFC બેંક", "ICICI બેંક", "એક્સિસ બેંક", "પંજાબ નેશનલ બેંક"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "સુરક્ષિત રીતે ચૂકવો",
        processing: "ચુકવણી પ્રક્રિયામાં છે...",
        success: "ચુકવણી સફળ!",
        successMessage: "તમારો ઓર્ડર કન્ફર્મ થઈ ગયો છે. સ્થાનિક કારીગરોને ટેકો આપવા બદલ આભાર!",
        continueShopping: "ખરીદી ચાલુ રાખો",
        step1: "ચકાસણી",
        step2: "શિપિંગ",
        step3: "ચુકવણી",
        otp: { title: "તમારો મોબાઇલ નંબર ચકાસો", subtitle: "અમે તમારા ફોન પર વન-ટાઇમ પાસવર્ડ મોકલીશું.", phoneLabel: "૧૦-અંકનો મોબાઇલ નંબર", phonePlaceholder: "તમારો મોબાઇલ નંબર દાખલ કરો", sendButton: "OTP મોકલો", enterOtpTitle: "OTP દાખલ કરો", enterOtpSubtitle: "{phoneNumber} પર મોકલેલો ૬-અંકનો કોડ દાખલ કરો", otpLabel: "વન-ટાઇમ પાસવર્ડ", otpPlaceholder: "૬-અંકનો OTP દાખલ કરો", verifyButton: "ચકાસો અને આગળ વધો" },
        address: { title: "શિપિંગ સરનામું", subtitle: "અમારે તમારો ઓર્ડર ક્યાં મોકલવો જોઈએ?", fullName: "પૂરું નામ", addressLine: "સરનામું (ઘર નંબર, બિલ્ડિંગ, શેરી, વિસ્તાર)", city: "શહેર", state: "રાજ્ય", pincode: "પિન કોડ", saveButton: "સાચવો અને ચાલુ રાખો" },
        shippingTo: "શિપિંગ સરનામું"
    },
    deleteConfirmation: {
      title: "કાઢી નાખવાની પુષ્ટિ કરો",
      message: "શું તમે ખાતરી કરો છો કે તમે '{productName}' કાઢી નાખવા માંગો છો? આ ક્રિયાને પૂર્વવત્ કરી શકાતી નથી.",
      confirmButton: "ઉત્પાદન કાઢી નાખો",
      cancelButton: "રદ કરો"
    },
    deleteProductModal: {
      title: "અવાજ દ્વારા ઉત્પાદન કાઢી નાખો",
      prompt: "કાઢી નાખવા માટે ઉત્પાદનનું નામ બોલો.",
      deleted: "ઉત્પાદન કાઢી નાખ્યું.",
      cancelled: "કાઢી નાખવાનું રદ કર્યું."
    },
    voiceAssistant: {
        ui: { tooltip: "વૉઇસ સહાયક સક્રિય કરો", listening: "સાંભળી રહ્યું છે...", processing: "પ્રક્રિયા કરી રહ્યું છે...", talkToAI: "AI સાથે વાત કરો" },
        responses: { 
            greeting: "નમસ્તે! હું આજે તમારી કેવી રીતે મદદ કરી શકું?",
            commandNotFound: "માફ કરશો, મને સમજાયું નહીં. કૃપા કરીને ફરી પ્રયાસ કરો.",
            addProduct: { 
                promptForImage: "ચોક્કસ. કૃપા કરીને તમારા નવા ઉત્પાદનના એકથી પાંચ ફોટા અપલોડ કરો. હું તમારા માટે છબીઓમાંથી આપમેળે વિગતો બનાવીશ.", 
                generating: "આભાર. હું હવે AI સાથે ઉત્પાદન વિગતો બનાવી રહ્યો છું. આમાં થોડો સમય લાગી શકે છે.",
                promptForReview: "મેં ઉત્પાદન વિગતો બનાવી છે. કૃપા કરીને તમારી સ્ક્રીન પર તેની સમીક્ષા કરો. જો જરૂર હોય તો તમે ફેરફાર કરી શકો છો. જ્યારે તમે તૈયાર હોવ, ત્યારે પ્રકાશિત કરો બટન દબાવો."
            },
            deleteProduct: {
                promptForSelection: "તમે કયું ઉત્પાદન કાઢી નાખવા માંગો છો? કૃપા કરીને તે પસંદ કરો.",
                noProducts: "તમારી પાસે કાઢી નાખવા માટે કોઈ ઉત્પાદનો નથી.",
                promptForName: "તમે કયું ઉત્પાદન કાઢી નાખવા માંગો છો? કૃપા કરીને તેનું નામ બોલો.",
                productNotFound: "મને તે નામનું કોઈ ઉત્પાદન મળ્યું નથી. કૃપા કરીને ફરી પ્રયાસ કરો.",
                deleted: "ઠીક છે, મેં '{productName}' કાઢી નાખ્યું છે.",
                cancelled: "ઠીક છે, મેં કાઢી નાખવાનું રદ કર્યું છે."
            },
            confirmation: {
                yes: "હા,બરાબર",
                no: "ના"
            }
        },
        commands: { 
            addProduct: "નવું ઉત્પાદન ઉમેરો,ઉત્પાદન બનાવો,નવી આઇટમ",
            deleteProduct: "ઉત્પાદન કાઢી નાખો,આઇટમ દૂર કરો"
        }
    },
    accountSettings: {
        title: "એકાઉન્ટ સેટિંગ્સ",
        backToDashboard: "ડેશબોર્ડ પર પાછા જાઓ",
        memberSince: "સભ્ય",
        totalOrders: "કુલ ઓર્ડર"
    },
    shilpoPlus: {
        title: "શિલ્પો+",
        subtitle: "પ્રીમિયમ લાભો અનલૉક કરો",
        benefit1: "પાત્ર વસ્તુઓ પર ઝડપી ડિલિવરી",
        benefit2: "નવી હસ્તકલા અને સંગ્રહોમાં પ્રારંભિક ઍક્સેસ",
        benefit3: "વિશિષ્ટ સભ્ય-માત્ર કિંમતો",
        cta: "શિલ્પો+ પર અપગ્રેડ કરો",
        comingSoon: "ટૂંક સમયમાં આવી રહ્યું છે!"
    }
  },
  kn: {
    common: { getStarted: "ಪ್ರಾರಂಭಿಸಿ", edit: "ಸಂಪಾದಿಸಿ", save: "ಉಳಿಸಿ", add: "ಸೇರಿಸಿ", publish: "ಪ್ರಕਟಿಸಿ", cancel: "ರದ್ದುಗೊಳಿಸಿ", close: "ಮುಚ್ಚಿ", delete: "ಅಳಿಸಿ" },
    nav: { features: "ವೈಶಿಷ್ಟ্যಗಳು", howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ", testimonials: "ಪ್ರಶంసಾಪತ್ರಗಳು" },
    hero: { title: { line1: "ಕೈಗಳಿಂದ ರಚಿಸಲಾಗಿದೆ,", line2: "AI ನಿಂದ ಚಾಲಿತವಾಗಿದೆ." }, subtitle: "ಪ್ರತಿಭಾವಂತ ಕುಶಲಕರ್ಮಿಗಳನ್ನು ಅನನ್ಯ, ಕೈಯಿಂದ ಮಾಡಿದ ನಿಧಿಗಳನ್ನು ಪಾಲಿಸುವ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ AI-ಚಾಲಿತ ಮಾರುಕಟ್ಟೆ.", cta: { join: "ಮಾರುಕಟ್ಟೆಗೆ ಸೇರಿ", explore: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ" } },
    artisanSignup: { existingMember: "ಈಗಾಗಲೇ ಸದಸ್ಯರಾಗಿದ್ದೀರಾ?", signInHere: "ಇಲ್ಲಿ ಸೈನ್ ಇನ್ ಮಾಡಿ" },
    customerSignup: { existingMember: "ಈಗಾಗಲೇ ಸದಸ್ಯರಾಗಿದ್ದೀರಾ?", signInHere: "ಇಲ್ಲಿ ಸೈನ್ ಇನ್ ಮಾಡಿ" },
    artisanSignIn: { title: "ಕುಶಲಕರ್ಮಿಯಾಗಿ ಸೈನ್ ಇನ್ ಮಾಡಿ", subtitle: "ಮತ್ತೆ ಸ್ವಾಗತ! ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅನ್ನು ಪ್ರವೇಶಿಸಿ.", back: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ", labels: { name: "ಪೂರ್ಣ ಹೆಸರು" }, placeholders: { name: "ನಿಮ್ಮ ನೋಂದಾಯಿತ ಹೆಸರನ್ನು ನಮೂದಿಸಿ" }, button: "ಸೈನ್ ಇನ್ ಮಾಡಿ", newMember: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗೆ ಹೊಸಬರೇ?", signUpHere: "ಇಲ್ಲಿ ಸೈನ್ ಅಪ್ ಮಾಡಿ", errors: { name: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.", loginFailed: "ಈ ಹೆಸರಿನ ಯಾವುದೇ ಕುಶಲಕರ್ಮಿ ಕಂಡುಬಂದಿಲ್ಲ." } },
    customerSignIn: { title: "ನಿಮ್ಮ ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ", subtitle: "ಮತ್ತೆ ಸ್ವಾಗತ! ಕೈಯಿಂದ ಮಾಡಿದ ಕರಕುಶಲ ವಸ್ತುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.", back: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ", labels: { email: "ಇಮೇಲ್ ವಿಳಾಸ", password: "ಪಾಸ್ವರ್ಡ್" }, placeholders: { email: "ಉದಾಹರಣೆಗೆ, priya@example.com", password: "ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ" }, button: "ಸೈನ್ ಇನ್ ಮಾಡಿ", newMember: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗೆ ಹೊಸಬರೇ?", signUpHere: "ಇಲ್ಲಿ ಸೈನ್ ಅಪ್ ಮಾಡಿ", errors: { email: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.", password: "ಪಾಸ್ವರ್ಡ್ ಖಾಲಿಯಾಗಿರಬಾರದು.", loginFailed: "ಅಮಾನ್ಯವಾದ ఆధారಗಳು." } },
    dashboard: {
        greeting: {
            morning: "ಶುಭೋದಯ, {name}!",
            afternoon: "ಶುభ మధ్యాಹ್ನ, {name}!",
            evening: "ಶುಭ ಸಂಜೆ, {name}!",
        },
        subtitle: "ಇದು ನಿಮ್ಮ ಸೃಜನಾತ್ಮಕ ಕೇಂದ್ರ. ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಮಾರಾಟವನ್ನು ವೀಕ್ಷಿಸಿ, ಮತ್ತು ನಿಮ್ಮ ಕಥೆಯನ್ನು ಜಗತ್ತಿನೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ.",
        logout: "ಲಾಗ್ ಔಟ್",
        addNewProduct: "ಹೊಸ ಉತ್ಪನ್ನವನ್ನು ಸೇರಿಸಿ",
        deleteProduct: "ಉತ್ಪನ್ನವನ್ನು ಅಳಿಸಿ",
        sales: { title: "ಒಂದು ನೋಟದಲ್ಲಿ ಮಾರಾಟ", totalSales: "ಒಟ್ಟು ಮಾರಾಟ", orders: "ಆದೇಶಗಳು", productsSold: "ಮಾರಾಟವಾದ ಉತ್ಪನ್ನಗಳು" },
        story: { title: "ನನ್ನ ಕಥೆ", placeholder: "ನಿಮ್ಮ ಕಲೆ, ನಿಮ್ಮ ಸ್ಫೂರ್ತಿ, ಮತ್ತು ನಿಮ್ಮ ಪರಂಪರೆಯ ಕಥೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ಗ್ರಾಹಕರೊಂದಿಗೆ ವೈಯಕ್ತಿಕ ಮಟ್ಟದಲ್ಲಿ ಸಂಪರ್ಕ ಸಾಧಿಸಲು ಇದು ನಿಮ್ಮ ಅವಕಾಶ." },
        products: { title: "ನನ್ನ ಉತ್ಪನ್ನಗಳು", emptyState: "ನೀವು ಇನ್ನೂ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಿಲ್ಲ. ನಿಮ್ಮ ಮೊದಲನೆಯದನ್ನು ಸೇರಿಸೋಣ!" },
        addProductModal: {
            title: "ಹೊಸ ಉತ್ಪನ್ನವನ್ನು ಸೇರಿಸಿ",
            step1: { title: "ಉತ್ಪನ್ನ ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", uploadLabel: "5 ಫೋಟೋಗಳವರೆಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಮೊದಲನೆಯದು ನಿಮ್ಮ ಮುಖ್ಯ ಚಿತ್ರ.", generate: "ಚಿತ್ರಗಳಿಂದ ವಿವರಗಳನ್ನು ರಚಿಸಿ" },
            step2: { title: "ವಿವರಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ...", message: "ನಮ್ಮ AI ನಿಮ್ಮ ಉತ್ಪನ್ನಕ್ಕಾಗಿ ಸುಂದರವಾದ ಪಟ್ಟಿಯನ್ನು ರಚಿಸುತ್ತಿದೆ. ಇದಕ್ಕೆ ಸ್ವಲ್ಪ ಸಮಯ লাগಬಹುದು." },
            step3: { title: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಪ್ರಕಟಿಸಿ", subtitle: "ನಿಮ್ಮ AI-ರಚಿಸಿದ ಉತ್ಪನ್ನ ವಿವರಗಳು ಸಿದ್ಧವಾಗಿವೆ. ಪ್ರಕಟಿಸುವ ಮೊದಲು ಅವುಗಳನ್ನು ಸಂಪಾದಿಸಲು ಹಿಂಜರಿಯಬೇಡಿ.", labels: { title: "ಉತ್ಪನ್ನದ ಶೀർഷಿಕೆ", description: "ಉತ್ಪನ್ನ ವಿವರಣೆ", story: "ಅದರ ಹಿಂದಿನ ಕಥೆ", price: "ಸೂಚಿಸಿದ ಬೆಲೆ (INR)", tags: "ಟ್ಯಾಗ್‌ಗಳು / ಕೀವರ್ಡ್‌ಗಳು" }, productAddedSuccess: "ಉತ್ಪನ್ನವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!" },
            errors: { noImage: "ದಯವಿಟ್ಟು ಕನಿಷ್ಠ ಒಂದು ಉತ್ಪನ್ನ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.", generationFailed: "AI ವಿವರಗಳನ್ನು ರಚಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ." }
        },
        selectionBanner: {
          title: "ಅಳಿಸಲು ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
          cancel: "ರದ್ದುಮಾಡಿ"
        }
    },
    customerDashboard: {
        greeting: "ಸ್ವಾಗತ, {name}!",
        searchPlaceholder: "ಮಡಿಕೆ, ಜವಳಿ, ಕಲೆಗಾಗಿ ಹುಡುಕಿ...",
        noResults: "'{query}' ಗಾಗಿ ಯಾವುದೇ ಕರಕುಶಲ ವಸ್ತುಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
        emptyState: "ಮಾರುಕಟ್ಟೆ ಈಗಷ್ಟೇ ಪ್ರಾರಂಭವಾಗುತ್ತಿದೆ! ಅದ್ಭುತ ಕರಕುಶಲ ವಸ್ತುಗಳಿಗಾಗಿ ಶೀಘ್ರದಲ್ಲೇ ಹಿಂತಿರುಗಿ ಪರಿಶೀಲಿಸಿ.",
        browseAll: "ಎಲ್ಲಾ ಕರಕುಶಲ ವಸ್ತುಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
        allProducts: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು",
        addToCart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
        buyNow: "ಈಗ ಖರೀದಿಸಿ",
        quantity: "ಪ್ರಮಾಣ",
        viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
        tabs: {
          browse: "ಉತ್ಪನ್ನಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
          myOrders: "ನನ್ನ ಆದೇಶಗಳು"
        },
        filters: { title: "ವರ್ಗಗಳು", all: "ಎಲ್ಲಾ", pottery: "ಮಡಿಕೆಗಳು", art: "ಕಲೆ ಮತ್ತು ಚಿತ್ರಕಲೆಗಳು", clothing: "ಬಟ್ಟೆ ಮತ್ತು ಜವಳಿ", jewellery: "ಆಭರಣ" },
        sort: { title: "ವಿಂಗಡಿಸಿ", newest: "ಹೊಸತು", priceAsc: "ಬೆಲೆ: ಕಡಿಮೆ ಇಂದ ಹೆಚ್ಚು", priceDesc: "ಬೆಲೆ: ಹೆಚ್ಚು ಇಂದ ಕಡಿಮೆ" },
        accountSettings: "ಖಾತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು"
    },
    orders: {
      title: "ನನ್ನ ಆದೇಶಗಳು",
      emptyState: "ನೀವು ಇನ್ನೂ ಯಾವುದೇ ಆದೇಶಗಳನ್ನು ಮಾಡಿಲ್ಲ.",
      emptyStateSubtext: "ನಿಮ್ಮ ಮುಂದಿನ ಕೈಯಿಂದ ಮಾಡಿದ ನಿಧಿಯನ್ನು ಹುಡುಕಲು ಬ್ರೌಸಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ!",
      orderId: "ಆದೇಶ ಐಡಿ",
      orderDate: "ಆದೇಶ ದಿನಾಂಕ",
      totalAmount: "ಒಟ್ಟು ಮೊತ್ತ",
      status: "ಸ್ಥಿತಿ",
      orderDetails: "ಆದೇಶದ ವಿವರಗಳು",
      itemsInOrder: "ಈ ಆದೇಶದಲ್ಲಿರುವ ವಸ್ತುಗಳು",
      priceBreakdown: "ಬೆಲೆ ವಿಭಜನೆ",
      expectedDelivery: "ನಿರೀಕ್ಷಿತ ವಿತರಣೆ",
      deliveryTracker: "ವಿತರಣಾ ಟ್ರ್ಯಾಕರ್",
      statusTypes: {
        ordered: "ಆದೇಶಿಸಲಾಗಿದೆ",
        packed: "ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ",
        shipped: "ರವಾನಿಸಲಾಗಿದೆ",
        delivered: "ವಿತರಿಸಲಾಗಿದೆ"
      }
    },
    cart: { title: "ನಿಮ್ಮ ಶಾಪಿಂಗ್ ಕಾರ್ಟ್", empty: "ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ.", total: "ಒಟ್ಟು", checkout: "ಚೆಕ್ಔಟ್ ಮಾಡಲು ಮುಂದುವರಿಯಿರಿ", remove: "ತೆಗೆದುಹಾಕಿ", itemAdded: "ವಸ್ತುವನ್ನು ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!", itemRemoved: "ವಸ್ತುವನ್ನು ಕಾರ್ಟ್‌ನಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ." },
    payment: {
        title: "Complete Your Purchase",
        secureCheckout: "ಸುರಕ್ಷಿತ ಚೆಕ್ಔಟ್",
        orderSummary: "ಆರ್ಡರ್ ಸಾರಾಂಶ",
        subtotal: "ಉಪಮೊತ್ತ",
        shipping: "ಶಿಪ್ಪಿಂಗ್",
        shippingFree: "ಉಚಿತ",
        total: "ಒಟ್ಟು",
        totalPayable: "ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದದ್ದು",
        paymentMethod: "ಪಾವತಿ ವಿಧಾನ",
        methods: {
            card: "ಕ್ರೆಡಿಟ್/ಡೆಬಿಟ್ ಕಾರ್ಡ್",
            upi: "UPI",
            netbanking: "ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್"
        },
        cardForm: {
            number: "ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
            holder: "ಕಾರ್ಡುದಾರರ ಹೆಸರು",
            expiry: "ಮುಕ್ತಾಯ (MM/YY)",
            cvv: "CVV"
        },
        upiForm: {
            scan: "ಪಾವತಿಸಲು QR ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
            or: "ಅಥವಾ",
            enterId: "UPI IDಯನ್ನು ನಮೂದಿಸಿ",
            placeholder: "yourname@bank"
        },
        netbankingForm: {
            select: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಆಯ್ಕೆಮಾಡಿ",
            banks: ["ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ", "HDFC ಬ್ಯಾಂಕ್", "ICICI ಬ್ಯಾಂಕ್", "ಆಕ್ಸಿಸ್ ಬ್ಯಾಂಕ್", "ಪಂಜಾಬ್ ನ್ಯಾಷనల్ ಬ್ಯಾಂಕ್"]
        },
        payButton: "Pay ₹{amount}",
        paySecurely: "ಸುರಕ್ಷಿತವಾಗಿ ಪಾವತಿಸಿ",
        processing: "ಪಾವತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ...",
        success: "ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
        successMessage: "ನಿಮ್ಮ ಆರ್ಡರ್ ಅನ್ನು ದೃಢೀಕರಿಸಲಾಗಿದೆ. ಸ್ಥಳೀಯ ಕುಶಲಕರ್ಮಿಗಳನ್ನು ಬೆಂಬಲಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು!",
        continueShopping: "ಖರೀದಿಯನ್ನು ಮುಂದುವರಿಸಿ",
        step1: "ಪರಿಶೀಲನೆ",
        step2: "ಶಿಪ್ಪಿಂಗ್",
        step3: "ಪಾವತಿ",
        otp: { title: "ನಿಮ್ಮ ಮೊಬೈల్ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ", subtitle: "ನಾವು ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಒಂದು-ಬಾರಿ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಕಳುಹಿಸುತ್ತೇವೆ.", phoneLabel: "10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ", phonePlaceholder: "ನಿಮ್ಮ ಮೊಬೈల్ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ", sendButton: "OTP ಕಳುಹಿಸಿ", enterOtpTitle: "OTP ನಮೂದಿಸಿ", enterOtpSubtitle: "{phoneNumber} ಗೆ ಕಳುಹಿಸಲಾದ 6-ಅಂಕಿಯ ಕೋಡ್ ಅನ್ನು ನಮೂದಿಸಿ", otpLabel: "ಒಂದು-ಬಾರಿ ಪಾಸ್‌ವರ್ಡ್", otpPlaceholder: "6-ಅಂಕಿಯ OTP ನಮೂದಿಸಿ", verifyButton: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ" },
        address: { title: "ಶಿಪ್ಪಿಂಗ್ ವಿಳಾಸ", subtitle: "ನಿಮ್ಮ ಆದೇಶವನ್ನು ನಾವು ಎಲ್ಲಿಗೆ ಕಳುಹಿಸಬೇಕು?", fullName: "ಪೂರ್ಣ ಹೆಸರು", addressLine: "ವಿಳಾಸ (ಮನೆ ಸಂಖ್ಯೆ, ಕಟ್ಟಡ, ರಸ್ತೆ, ಪ್ರದೇಶ)", city: "ನಗರ", state: "ರಾಜ್ಯ", pincode: "పిన్ కోడ్", saveButton: "ಉಳಿಸಿ ಮತ್ತು ಮುಂದುವರಿಸಿ" },
        shippingTo: "ಶಿಪ್ಪಿಂಗ್ ವಿಳಾಸ"
    },
    deleteConfirmation: {
      title: "ಅಳಿಸುವಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿ",
      message: "'{productName}' ಅನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿದ್ದೀರಾ? ಈ ಕ್ರಿಯೆಯನ್ನು ಹಿಂತಿರುಗಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
      confirmButton: "ಉತ್ಪನ್ನವನ್ನು ಅಳಿಸಿ",
      cancelButton: "ರದ್ದುಮಾಡಿ"
    },
    deleteProductModal: {
      title: "ಧ್ವನಿ ಮೂಲಕ ಉತ್ಪನ್ನವನ್ನು ಅಳಿಸಿ",
      prompt: "ಅಳಿಸಲು ಉತ್ಪನ್ನದ ಹೆಸರನ್ನು ಹೇಳಿ.",
      deleted: "ಉತ್ಪನ್ನವನ್ನು ಅಳಿಸಲಾಗಿದೆ.",
      cancelled: "ಅಳಿಸುವಿಕೆಯನ್ನು ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ."
    },
    voiceAssistant: {
        ui: { tooltip: "ಧ್ವನಿ ಸಹಾಯಕವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ", listening: "ಕೇಳುತ್ತಿದೆ...", processing: "ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ...", talkToAI: "AI ಜೊತೆ ಮಾತನಾಡಿ" },
        responses: { 
            greeting: "ನಮಸ್ಕಾರ! ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
            commandNotFound: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            addProduct: { 
                promptForImage: "ಖಂಡಿತ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೊಸ ಉತ್ಪನ್ನದ ಒಂದರಿಂದ ಐದು ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ನಾನು ನಿಮಗಾಗಿ ಚಿತ್ರಗಳಿಂದ ವಿವರಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚಿಸುತ್ತೇನೆ.", 
                generating: "ಧನ್ಯವಾದಗಳು. ನಾನು ಈಗ AI ನೊಂದಿಗೆ ಉತ್ಪನ್ನದ ವಿವರಗಳನ್ನು ರಚಿಸುತ್ತಿದ್ದೇನೆ. ಇದಕ್ಕೆ ಸ್ವಲ್ಪ ಸಮಯ লাগಬಹುದು.",
                promptForReview: "ನಾನು ಉತ್ಪನ್ನದ ವಿವರಗಳನ್ನು ರಚಿಸಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಅವುಗಳನ್ನು ನಿಮ್ಮ ಪರದೆಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ. ಅಗತ್ಯವಿದ್ದರೆ ನೀವು ಬದಲಾವಣೆಗಳನ್ನು ಮಾಡಬಹುದು. ನೀವು ಸಿದ್ಧರಾದಾಗ, ಪ್ರಕಟಿಸು ಬಟನ್ ಒತ್ತಿರಿ."
            },
            deleteProduct: {
                promptForSelection: "ನೀವು ಯಾವ ಉತ್ಪನ್ನವನ್ನು ಅಳಿಸಲು ಬಯಸುತ್ತೀರಿ? ದಯವಿಟ್ಟು ಅದನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
                noProducts: "ಅಳಿಸಲು ನಿಮ್ಮ ಬಳಿ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳಿಲ್ಲ.",
                promptForName: "ನೀವು ಯಾವ ಉತ್ಪನ್ನವನ್ನು ಅಳಿಸಲು ಬಯಸುತ್ತೀರಿ? ದಯವಿಟ್ಟು ಅದರ ಹೆಸರನ್ನು ಹೇಳಿ.",
                productNotFound: "ಆ ಹೆಸರಿನ ಯಾವುದೇ ಉತ್ಪನ್ನವನ್ನು ನಾನು ಕಂಡುಹಿಡಿಯಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
                deleted: "ಸರಿ, ನಾನು '{productName}' ಅನ್ನು ಅಳಿಸಿದ್ದೇನೆ.",
                cancelled: "ಸರಿ, ನಾನು ಅಳಿಸುವಿಕೆಯನ್ನು ರದ್ದುಗೊಳಿಸಿದ್ದೇನೆ."
            },
            confirmation: {
                yes: "ಹೌದು,ಸರಿ",
                no: "ಇಲ್ಲ,ಬೇಡ"
            }
        },
        commands: { 
            addProduct: "ಹೊಸ ಉತ್ಪನ್ನ ಸೇರಿಸಿ,ಉತ್ಪನ್ನ ರಚಿಸಿ,ಹೊಸ ಐಟಂ",
            deleteProduct: "ಉತ್ಪನ್ನ ಅಳಿಸಿ,ಐਟಂ ತೆಗೆದುಹಾಕಿ"
        }
    },
    accountSettings: {
        title: "ಖಾತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        backToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
        memberSince: "ಸದস্য",
        totalOrders: "ಒಟ್ಟು ಆದೇಶಗಳು"
    },
    shilpoPlus: {
        title: "ಶಿಲ್ಪೋ+",
        subtitle: "ಪ್ರೀಮಿಯಂ ಪ್ರಯೋಜನಗಳನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ",
        benefit1: "ಅರ್ಹ ವಸ್ತುಗಳ ಮೇಲೆ ವೇಗದ ವಿತರಣೆ",
        benefit2: "ಹೊಸ ಕರಕುಶಲ ಮತ್ತು ಸಂಗ್ರಹಣೆಗಳಿಗೆ ಆರಂಭಿಕ ಪ್ರವೇಶ",
        benefit3: "ವಿಶೇಷ ಸದಸ್ಯ-ಮಾತ್ರ ಬೆಲೆಗಳು",
        cta: "ಶಿಲ್ಪೋ+ ಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ",
        comingSoon: "ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ!"
    }
  }
};