import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("luxe-cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Could not load cart:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("luxe-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (watch) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === watch.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === watch.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...watch,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};