from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(executable_path='path/to/chromedriver')

driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

username = driver.find_element(By.ID, "txtUsername")
password = driver.find_element(By.ID, "txtPassword")

username.send_keys("your_username")
password.send_keys("your_password")

driver.find_element(By.ID, "btnLogin").click()

claim_section = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "menu_claim"))
)
claim_section.click()

driver.find_element(By.ID, "menu_assignClaim").click()

driver.find_element(By.ID, "employee_name").send_keys("Peter Mac Anderson")
driver.find_element(By.ID, "claim_name").send_keys("Travel Allowance")
driver.find_element(By.ID, "currency_id").click()
driver.find_element(By.XPATH, "//li[text()='United States Dollars']").click()
driver.find_element(By.ID, "amount_claimed").send_keys("100")
driver.find_element(By.ID, "remark").send_keys("Pay $100 as travel allowance")

driver.find_element(By.ID, "date").clear()
driver.find_element(By.ID, "date").send_keys("2023-09-08")
driver.find_element(By.ID, "claim_item_type_id_1").send_keys("Accommodation - $30")
driver.find_element(By.ID, "claim_item_type_id_2").send_keys("Fuel Allowance - $30")
driver.find_element(By.ID, "claim_item_type_id_3").send_keys("Transport - $40")

driver.find_element(By.ID, "btn_submit").click()

driver.back()

driver.quit()
