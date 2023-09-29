from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(executable_path='path/to/chromedriver')

driver.get("https://demo.opencart.com/")

search_input = driver.find_element(By.NAME, "search")
search_input.send_keys("iPhone")
search_input.send_keys(Keys.RETURN)

product_link = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.PARTIAL_LINK_TEXT, "iPhone"))
)
product_link.click()

add_to_cart_button = driver.find_element(By.ID, "button-cart")
add_to_cart_button.click()

driver.find_element(By.PARTIAL_LINK_TEXT, "Shopping Cart").click()
product_name_in_cart = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.LINK_TEXT, "iPhone"))
)
assert product_name_in_cart.text == "iPhone"

checkout_button = driver.find_element(By.ID, "button-checkout")
checkout_button.click()

driver.find_element(By.ID, "input-payment-firstname").send_keys("John")
driver.find_element(By.ID, "input-payment-lastname").send_keys("Doe")
driver.find_element(By.ID, "input-payment-address-1").send_keys("123 Main St")
driver.find_element(By.ID, "input-payment-city").send_keys("City")
driver.find_element(By.ID, "input-payment-postcode").send_keys("12345")

shipping_method = driver.find_element(By.NAME, "shipping_method")
shipping_method.click()

payment_method = driver.find_element(By.NAME, "payment_method")
payment_method.click()

order_button = driver.find_element(By.ID, "button-confirm")
order_button.click()

confirmation_message = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//h1[contains(text(), 'Your order has been placed!')]"))
)
assert "Your order has been placed!" in confirmation_message.text

driver.quit()
