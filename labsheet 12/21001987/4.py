from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(executable_path='path/to/chromedriver')

driver.get("https://phptravels.net/")

driver.find_element(By.XPATH, "//a[contains(@href,'hotels')]").click()

location_input = driver.find_element(By.ID, "select2-drop-mask")
location_input.send_keys("Dubai, United Arab Emirates")
location_input.send_keys(Keys.RETURN)

checkin_date = driver.find_element(By.ID, "checkin")
checkin_date.clear()
checkin_date.send_keys("20/09/2022")

checkout_date = driver.find_element(By.ID, "checkout")
checkout_date.clear()
checkout_date.send_keys("21/09/2023")

adults_select = driver.find_element(By.ID, "adults")
adults_select.send_keys("2")

driver.find_element(By.XPATH, "//button[contains(@class,'btn-block')]").click()

driver.find_element(By.XPATH, "//h4[contains(text(),'Movenpick Grand Al Bustan')]").click()

driver.find_element(By.XPATH, "//input[@value='Single']").click()

driver.find_element(By.XPATH, "//input[@name='extraitems[]' and @value='breakfast']").click()

driver.find_element(By.XPATH, "//button[contains(@class,'book_btn')]").click()

driver.find_element(By.name("firstname")).send_keys("John")

driver.find_element(By.name("lastname")).send_keys("Doe")

driver.find_element(By.name("email")).send_keys("john.doe@example.com")

driver.find_element(By.name("phone")).send_keys("+1234567890")

driver.find_element(By.name("address")).send_keys("123 Main Street")

driver.find_element(By.name("city")).send_keys("Dubai")

driver.find_element(By.name("zip")).send_keys("12345")

driver.find_element(By.name("country")).send_keys("United Arab Emirates")

driver.find_element(By.xpath("//input[@value='Pay on Arrival']")).click()

driver.find_element(By.xpath("//button[@type='submit']")).click()

driver.find_element(By.xpath("//a[contains(text(),'Login to PayPal')]")).click()

driver.find_element(By.name("email")).send_keys("your_paypal_email")

driver.find_element(By.name("password")).send_keys("your_paypal_password")

driver.find_element(By.id("btnLogin")).click()

driver.find_element(By.xpath("//span[contains(text(),'CREDIT UNION 1')]")).click()

driver.find_element(By.xpath("//button[contains(text(),'Complete Payment')]")).click()

driver.find_element(By.xpath("//button[contains(text(),'Download Receipt')]")).click()

driver.quit()
