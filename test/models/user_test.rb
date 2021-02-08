require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(first_name: "Sam", last_name: "Smith", email: "sam@example.com", role: 0, password: "password")
  end

  test "user should be valid" do
    assert @user.valid?
  end

  test "first_name should be present" do
    @user.first_name = " "
    assert_not @user.valid?
  end

  test "last_name should be present" do
    @user.last_name = " "
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = " "
    assert_not @user.valid?
  end

  test "first_name should be of valid lenth" do
    @user.first_name = "s"*51
    assert_not @user.valid?
  end

  test "last_name should be of valid lenth" do
    @user.last_name = "s"*51
    assert_not @user.valid?
  end

  test "email should be unique" do
    @user.save!
    @user1 = @user.dup
    assert_not @user1.valid?
  end

  test "email should be loweredcase" do
    @user.email = "AAA@EXAMPLE.COM"
    assert @user.valid?
  end

  test "email should reject invalid email address (Negative test case)" do
    @user.email = "aaa"
    assert_not @user.valid?
  end

  test "email should accept valid email address (Positive test case)" do
    @user.email = "aa1a@example.com"
    assert @user.valid?
  end
 
  test "similar email with difference in uppercase and lowercase" do
    @user1 = User.new(first_name: "Sammy", last_name: "Oliver", email: "sammy@example.com")
    @user1.save
    @user2 = User.new(first_name: "John", last_name: "Smith", email: "SAMMY@example.com")
    @user2.save
    assert_not @user2.valid?
  end

  test "user should have a valid role either standard: 0 or administrator: 1" do
    @user.role = 1
    assert @user.valid?
  end

end





