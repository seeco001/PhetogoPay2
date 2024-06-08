package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the UserProfile type in your schema. */
public final class UserProfilePath extends ModelPath<UserProfile> {
  private CreditTransactionPath creditTransaction;
  private CreditAccountInfoPath creditAccountInfo;
  UserProfilePath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, UserProfile.class);
  }
  
  public synchronized CreditTransactionPath getCreditTransaction() {
    if (creditTransaction == null) {
      creditTransaction = new CreditTransactionPath("creditTransaction", true, this);
    }
    return creditTransaction;
  }
  
  public synchronized CreditAccountInfoPath getCreditAccountInfo() {
    if (creditAccountInfo == null) {
      creditAccountInfo = new CreditAccountInfoPath("creditAccountInfo", false, this);
    }
    return creditAccountInfo;
  }
}
